import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';

export function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    // Simula proceso de pago (3 segundos)
    const timer = setTimeout(() => {
      navigate('/confirm', { state });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate, state]);

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
