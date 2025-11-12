import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { getSignupUrl, ENV } from '../config/env';

const SUBSCRIPTION_API_URL = ENV.SUBSCRIPTION_API_URL + '/invoices';
const ORGANIZATION_API_URL = ENV.ORGANIZATION_API_URL + '/organizations';

export function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [showThankYou, setShowThankYou] = useState(false);
  const [organizationId, setOrganizationId] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const hasProcessedRef = useRef(false);

  // Extraer precio numérico del string del plan
  const extractPrice = (priceString: string): number => {
    const match = priceString.match(/[\d.]+/);
    if (match) {
      return parseFloat(match[0].replace(/\./g, ''));
    }
    return 0;
  };


  const getPaymentMethodId = (metodo: string): number => {
    if (metodo === 'tarjeta') return 101;
    if (metodo === 'paypal') return 102;
    return 1; // Por defecto
  };

  const getSubscriptionId = (planNombre: string): number => {
    if (planNombre === 'Básico') return 302;
    if (planNombre === 'Premium') return 301;
    return 1; // Por defecto
  };

  // Crear organización
  const createOrganization = async (datos: any) => {
    try {
      const response = await fetch(ORGANIZATION_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nit: datos.nit,
          name: datos.institucion,
          address: datos.direccion || null,
          phone: datos.telefono || null,
          photoURL: null,
          domain: datos.dominio,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error al crear organización: ${errorData}`);
      }

      const orgData = await response.json();
      return orgData.IDOrganization || orgData.id;
    } catch (err: any) {
      console.error('Error creando organización:', err);
      throw err;
    }
  };

  // Crear factura
  const createInvoice = async (orgId: number, plan: any, metodo: string, datos: any) => {
    try {
      // Crear fechas en UTC para PostgreSQL
      const today = new Date();
      const endDate = new Date(today);
      endDate.setFullYear(endDate.getFullYear() + 1); // 1 año después

      // Asegurar que las fechas estén en UTC
      const startDateUTC = new Date(Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0, 0, 0, 0
      ));

      const endDateUTC = new Date(Date.UTC(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate(),
        0, 0, 0, 0
      ));

      const total = extractPrice(plan.precio);
      const paymentMethodId = getPaymentMethodId(metodo);
      const subscriptionId = getSubscriptionId(plan.nombre);

      const invoiceData = {
        IDSubscription: subscriptionId,
        IDSubscriptionStatus: 201,
        IDPaymentMethod: paymentMethodId,
        IDCurrency: 3,
        IDOrganization: orgId,
        total: total,
        startDate: startDateUTC.toISOString(),
        endDate: endDateUTC.toISOString(),
      };

      console.log('Datos de factura a enviar:', invoiceData);

      const response = await fetch(SUBSCRIPTION_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok) {
        let errorData;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          errorData = await response.json();
        } else {
          errorData = await response.text();
        }

        console.error('Error response:', {
          status: response.status,
          statusText: response.statusText,
          errorData,
        });

        // Intentar extraer mensaje más específico
        const errorMessage = typeof errorData === 'string'
          ? errorData
          : errorData?.message || errorData?.error || JSON.stringify(errorData);

        throw new Error(`Error al crear factura (${response.status}): ${errorMessage}`);
      }

      const result = await response.json();
      console.log('Factura creada exitosamente:', result);
      return result;
    } catch (err: any) {
      console.error('Error creando factura:', err);
      throw err;
    }
  };

  useEffect(() => {
    // Prevenir ejecución múltiple
    if (hasProcessedRef.current) {
      return;
    }

    const processPayment = async () => {
      if (!state?.plan || !state?.datos || !state?.metodo) {
        setError('Faltan datos para procesar el pago');
        setLoading(false);
        return;
      }

      // Marcar como procesado antes de iniciar
      hasProcessedRef.current = true;

      try {
        setLoading(true);
        setError('');

        // 1. Crear organización
        const orgId = await createOrganization(state.datos);
        setOrganizationId(orgId);

        // 2. Crear factura
        await createInvoice(orgId, state.plan, state.metodo, state.datos);

        // 3. Mostrar pantalla de éxito
        setShowThankYou(true);
      } catch (err: any) {
        console.error('Error procesando pago:', err);
        setError(err.message || 'Error al procesar el pago. Por favor, inténtalo de nuevo.');
        // Resetear el flag en caso de error para permitir reintento
        hasProcessedRef.current = false;
      } finally {
        setLoading(false);
      }
    };

    processPayment();
  }, [state]);

  const handleCreateAccount = () => {
    const url = organizationId
      ? getSignupUrl(1, organizationId)
      : getSignupUrl(1);
    window.location.href = url;
  };

  if (error && !loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] p-6">
        <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-200 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-red-600 mb-4 font-['Poppins']">
              Error al procesar el pago
            </h1>
            <p className="text-gray-600 font-['Inter'] mb-6">{error}</p>
            <Button
              onClick={() => navigate('/plans')}
              className="px-8 py-3 bg-[#3A6EA5] hover:bg-[#2E5A8A] text-white font-['Poppins']"
            >
              Volver a planes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] p-6">
        <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-200 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#3A6EA5] rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative p-3 bg-[#3A6EA5]/10 rounded-2xl">
                <Logo className="h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#222831] mb-4 font-['Poppins']">
            ¡Gracias por tu compra!
          </h1>

          <p className="text-xl text-gray-600 font-['Inter'] mb-8 leading-relaxed">
            Tu suscripción ha sido procesada exitosamente. Ahora es momento de crear tu cuenta de administrador
            para comenzar a gestionar tu institución educativa con Planifika.
          </p>

          <div className="bg-gradient-to-r from-[#3A6EA5]/10 to-[#FFD369]/10 border border-[#3A6EA5]/20 rounded-2xl p-6 mb-6">
            <p className="text-gray-700 font-['Inter']">
              🎉 <strong>¡Bienvenido a Planifika!</strong> Estás a un paso de transformar la gestión de proyectos
              educativos en tu institución.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 font-['Poppins'] mb-2">
                  Correo de confirmación enviado
                </h3>
                <p className="text-blue-800 font-['Inter'] leading-relaxed">
                  Hemos enviado un correo electrónico a tu dirección con un enlace para continuar con la creación de tu cuenta
                  y tu factura de compra. También puedes usar el botón de abajo para continuar directamente.
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={handleCreateAccount}
            className="flex items-center justify-center gap-3 px-12 py-4 text-xl font-['Poppins'] rounded-2xl shadow-2xl shadow-[#3A6EA5]/30 hover:shadow-[#3A6EA5]/50 transform hover:scale-105 transition-all duration-300 bg-[#3A6EA5] hover:bg-[#2E5A8A] text-white"
          >
            <span>Crea tu cuenta</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7]">
      <div className="animate-bounce mb-8">
        <Logo className="h-16 w-16" />
      </div>
      <h1 className="text-3xl font-bold text-[#3A6EA5] font-poppins">Procesando tu suscripción...</h1>
      <p className="text-gray-500 mt-4 font-inter">Por favor espera un momento</p>

      <div className="mt-10 w-20 h-20 border-4 border-[#3A6EA5]/30 border-t-[#3A6EA5] rounded-full animate-spin"></div>
    </div>
  );
}
