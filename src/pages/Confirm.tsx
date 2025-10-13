import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';

export function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, method, data } = location.state || {};

  useEffect(() => {
    if (!plan || !data) {
      navigate('/plans');
    }
  }, [plan, data, navigate]);

  if (!plan || !data) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] p-6">
      <div className="max-w-3xl w-full bg-white p-10 rounded-3xl shadow-lg border border-gray-200 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo className="h-12 w-12" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#222831] font-poppins mb-6">
          Pago confirmado ✅
        </h1>

        <p className="text-lg text-gray-600 font-inter mb-8">
          Aquí irá la pantalla de registro del <strong>administrador de la organización</strong>.
        </p>

        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-10 mb-8">
          <p className="text-gray-500 font-inter">
            🧩 Esta sección servirá para que el administrador ingrese sus datos de acceso, 
            defina credenciales y confirme la activación del plan seleccionado.
          </p>
        </div>

        {/* Plan data */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3A6EA5] mb-2">
            {plan.name} Plan
          </h2>
          <p className="text-gray-600 font-inter">
            Método de pago: <strong>{method || 'No especificado'}</strong>
          </p>
          <p className="text-lg font-semibold mt-2">Total: {plan.price}</p>
        </div>

        <Button
          onClick={() => navigate('/')}
          className={`w-full py-4 text-lg font-poppins ${
            plan.name === 'Premium'
              ? 'bg-[#FFD369] hover:bg-[#F5C94F] text-[#222831]'
              : 'bg-[#3A6EA5] hover:bg-[#2E5A8A] text-white'
          }`}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}
