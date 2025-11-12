import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';
import { Crown, Star, CreditCard, Wallet } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [metodo, setMetodo] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardType, setCardType] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  // Campos principales
  const [institucion, setInstitucion] = useState<string>('');
  const [nit, setNit] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [direccion, setDireccion] = useState<string>('');
  const [dominio, setDominio] = useState<string>('');
  const [titular, setTitular] = useState<string>('');

  if (!plan) {
    navigate('/plans');
    return null;
  }

  // Detectar tipo de tarjeta
  const detectarTipoTarjeta = (numero: string) => {
    const clean = numero.replace(/\s+/g, '');
    if (/^4/.test(clean)) return 'visa';
    if (/^5[1-5]/.test(clean)) return 'mastercard';
    if (/^3[47]/.test(clean)) return 'amex';
    if (/^6(?:011|5)/.test(clean)) return 'discover';
    return '';
  };

  // Colores dinámicos
  const isPremium = plan.nombre === 'Premium';
  const headerColor = isPremium ? '#FFD369' : '#3A6EA5';
  const textColor = isPremium ? '#222831' : '#FFFFFF';
  const icon = isPremium ? (
    <Crown className="h-6 w-6 mr-2 text-[#222831]" />
  ) : (
    <Star className="h-6 w-6 mr-2 text-white" />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <Logo className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-[#222831] font-poppins">Planifika</h1>
          </div>
          <Button
            onClick={() => navigate('/plans')}
            className={`font-poppins ${isPremium
                ? 'bg-[#FFD369] hover:bg-[#F5C94F] text-[#222831]'
                : 'bg-[#3A6EA5] hover:bg-[#2E5A8A]'
              }`}
          >
            ← Cambiar plan
          </Button>
        </div>

        {/* Plan */}
        <div
          className="text-center py-10"
          style={{ background: headerColor, color: textColor }}
        >
          <div className="flex justify-center items-center mb-3">{icon}</div>
          <h2 className="text-4xl font-bold font-poppins mb-2">{plan.nombre} Plan</h2>
          <p className="text-2xl font-semibold">{plan.precio}</p>
          <p className={`text-base font-inter ${isPremium ? 'text-[#333]' : 'text-white/90'}`}>
            Usuarios permitidos: {plan.usuarios}
          </p>
        </div>

        {/* Formulario */}
        <div className="p-10">
          <form className="grid md:grid-cols-2 gap-6 text-left">
            {/* Nombre institución */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nombre de la institución</label>
              <input
                type="text"
                value={institucion}
                onChange={(e) =>
                  setInstitucion(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ0-9 ]/g, ''))
                }
                placeholder="Universidad Nacional"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
              />
            </div>

            {/* NIT */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">NIT o ID Institucional</label>
              <input
                type="text"
                inputMode="numeric"
                value={nit}
                onChange={(e) => setNit(e.target.value.replace(/[^0-9\-]/g, ''))}
                placeholder="900123456-7"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Correo de contacto</label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="contacto@institucion.edu.co"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
              />
            </div>

            {/* Teléfono internacional */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
              <div className="w-full">
                <PhoneInput
                  country="co"                    // país por defecto (cambia si quieres)
                  value={telefono}                // guarda sin '+'
                  onChange={(phone: string) => {  // phone viene SIN el '+' al usar react-phone-input-2
                    setTelefono(phone);           // ej: "573104567890" o "3104567890" (según configuracion)
                  }}
                  placeholder="Ingresa tu número de teléfono"
                  enableSearch
                  disableSearchIcon
                  preferredCountries={['co', 'mx', 'us', 'es', 'ar', 'br']}
                  countryCodeEditable={false}
                  // estilos: ajusta según tu tailwind setup, evita los '!' innecesarios
                  inputClass="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none text-gray-800"
                  buttonClass="border-gray-300 bg-white rounded-l-md"
                  dropdownClass="text-gray-700 bg-white shadow-lg border border-gray-300"
                  inputProps={{
                    name: 'telefono',
                    required: true
                  }}
                />
              </div>
            </div>
            {/* Dirección */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Dirección</label>
              <input
                type="text"
                value={direccion}
                onChange={(e) =>
                  setDireccion(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ0-9#\-\s]/g, ''))
                }
                placeholder="Carrera 7 #45-60, Bogotá"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
              />
            </div>

            {/* Dominio */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Dominio de la universidad</label>
              <input
                type="text"
                value={dominio}
                onChange={(e) => {
                  const val = e.target.value.toLowerCase().replace(/[^a-z0-9.\-]/g, '');
                  setDominio(val);
                }}
                placeholder="ejemplo.edu.co"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
              />
              <p className="text-sm text-gray-500 mt-1">
                Ingresa el dominio principal de tu institución (sin http:// o www)
              </p>
            </div>
          </form>

          {/* Método de pago */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#222831] mb-6 font-poppins">Método de pago</h3>

            <div className="flex flex-col md:flex-row gap-6">
              {[
                { label: 'Tarjeta de Crédito', value: 'tarjeta', icon: <CreditCard className="inline-block mr-2 h-5 w-5" /> },
                { label: 'PayPal', value: 'paypal', icon: <Wallet className="inline-block mr-2 h-5 w-5" /> },
              ].map((opcion) => (
                <label
                  key={opcion.value}
                  onClick={() => setMetodo(opcion.value)}
                  className={`flex-1 p-5 border rounded-xl cursor-pointer transition-all ${metodo === opcion.value
                      ? 'border-[#3A6EA5] bg-[#3A6EA5]/10'
                      : 'border-gray-300 hover:border-[#3A6EA5]'
                    }`}
                >
                  <input
                    type="radio"
                    name="metodo"
                    value={opcion.value}
                    checked={metodo === opcion.value}
                    onChange={() => setMetodo(opcion.value)}
                    className="mr-3 accent-[#3A6EA5]"
                  />
                  {opcion.icon}
                  {opcion.label}
                </label>
              ))}
            </div>

            {/* Detalles tarjeta */}
            {metodo === 'tarjeta' && (
              <div className="mt-8 grid md:grid-cols-2 gap-6 animate-fadeIn">
                {/* Número */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Número de tarjeta</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => {
                        const val = e.target.value
                          .replace(/\D/g, '')
                          .replace(/(\d{4})(?=\d)/g, '$1 ')
                          .trim();
                        setCardNumber(val);
                        setCardType(detectarTipoTarjeta(val));
                      }}
                      inputMode="numeric"
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full p-3 pr-16 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] tracking-widest"
                    />
                    {cardType && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-1">
                        {cardType === 'visa' && (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-5" />
                        )}
                        {cardType === 'mastercard' && (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Titular */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Titular</label>
                  <input
                    type="text"
                    value={titular}
                    onChange={(e) =>
                      setTitular(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ ]/g, ''))
                    }
                    placeholder="Nombre del titular"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
                  />
                </div>

                {/* Expiración */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Fecha de expiración</label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, '');
                      if (val.length > 2) val = val.slice(0, 2) + '/' + val.slice(2, 4);
                      setExpiry(val);
                    }}
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="MM/AA"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
                  />
                </div>

                {/* CVV */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                  <input
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                    inputMode="numeric"
                    maxLength={3}
                    placeholder="***"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
                  />
                </div>
              </div>
            )}

            {metodo === 'paypal' && (
              <div className="mt-8 animate-fadeIn">
                <label className="block text-gray-700 font-semibold mb-2">Correo asociado a PayPal</label>
                <input
                  type="email"
                  placeholder="micorreo@paypal.com"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5]"
                />
              </div>
            )}
          </div>

          {/* Total */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-[#222831] mb-3">Total: {plan.precio}</h3>
            <Button
              onClick={() =>
                navigate('/processing', {
                  state: {
                    plan,
                    metodo,
                    datos: { institucion, nit, correo, telefono, direccion, dominio },
                  },
                })
              }
              className={`px-12 py-4 text-lg font-poppins ${isPremium
                  ? 'bg-[#FFD369] hover:bg-[#F5C94F] text-[#222831]'
                  : 'bg-[#3A6EA5] hover:bg-[#2E5A8A] text-white'
                }`}
            >
              Confirmar suscripción
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
