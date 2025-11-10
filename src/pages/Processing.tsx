import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { getSignupUrl } from '../config/env';

export function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Simulate payment process (3 seconds)
    const timer = setTimeout(() => {
      setShowThankYou(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate, state]);

  const handleCreateAccount = () => {
    window.location.href = getSignupUrl(1);
  };

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
