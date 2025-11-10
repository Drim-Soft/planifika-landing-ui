import React from 'react';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

export function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Básico',
      price: '$210.000 COP / mes',
      color: '#3A6EA5',
      users: 100,
      features: [
        { name: 'Hasta 100 usuarios', available: true },
        { name: 'Soporte prioritario 24/7', available: false },
        { name: 'Descuentos exclusivos según meses de permanencia', available: false },
        { name: 'Analítica en los proyectos', available: true },
        { name: 'Reportes', available: true },
      ],
      type: 'checkout',
    },
    {
      name: 'Premium',
      price: '$420.000 COP / mes',
      color: '#FFD369',
      users: 500,
      features: [
        { name: 'Hasta 500 usuarios', available: true },
        { name: 'Soporte prioritario 24/7', available: true },
        { name: 'Descuentos exclusivos según meses de permanencia', available: true },
        { name: 'Analítica en los proyectos', available: true },
        { name: 'Reportes', available: true },
      ],
      type: 'checkout',
    },
    {
      name: 'Empresarial',
      price: 'Planes personalizados',
      color: '#3AA657',
      users: '+500',
      features: [
        { name: 'Más de 500 usuarios', available: true },
        { name: 'Soporte prioritario 24/7', available: true },
        { name: 'Descuentos exclusivos según meses de permanencia', available: true },
        { name: 'Analítica en los proyectos', available: true },
        { name: 'Reportes avanzados', available: true },
      ],
      type: 'form',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] academic-pattern">
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Logo className="h-8 w-8" />
            <span className="text-2xl font-poppins font-bold text-[#222831]">Planifika</span>
          </div>
          <Link to="/">
            <Button className="font-poppins">Volver al inicio</Button>
          </Link>
        </div>
      </nav>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold font-poppins text-[#222831] mb-10">
          Planes y Precios
        </h1>
        <p className="text-lg text-gray-600 font-inter mb-16 max-w-3xl mx-auto">
          Compara las características de cada plan y elige el que mejor se adapte a tu institución.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-10 bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 planifika-card-hover"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${plan.color}, white)`,
                }}
              />
              <div className="relative z-10">
                <h2
                  className="text-4xl font-bold font-poppins mb-4"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold text-[#222831] mb-3">
                  {plan.price}
                </p>

                <ul className="text-left mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center font-inter ${
                        feature.available
                          ? 'text-gray-800'
                          : 'text-gray-400 line-through opacity-70'
                      }`}
                    >
                      {feature.available ? (
                        <CheckCircle
                          className="h-5 w-5 mr-3 text-[#3A6EA5]"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <XCircle
                          className="h-5 w-5 mr-3 text-gray-400"
                          strokeWidth={2}
                        />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>

                {/* Dynamic Button */}
                <Button
                  onClick={() => {
                    if (plan.type === 'checkout') {
                      navigate('/checkout', {
                        state: {
                          plan: {
                            nombre: plan.name,
                            precio: plan.price,
                            usuarios: plan.users,
                          },
                        },
                      });
                    } else if (plan.type === 'form') {
                      navigate('/enterprise-form', {
                        state: { plan },
                      });
                    }
                  }}
                  className={`w-full font-poppins py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all text-white ${
                    plan.name === 'Básico'
                      ? 'bg-[#3A6EA5] hover:bg-[#2E5A8A]'
                      : plan.name === 'Premium'
                      ? 'bg-[#FFD369] hover:bg-[#F5C94F] text-[#222831]'
                      : 'bg-[#3AA657] hover:bg-[#2F8A48]'
                  }`}
                >
                  {plan.type === 'form'
                    ? 'Contactar a Planifika'
                    : 'Elegir Plan'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 font-inter">
        © 2025 Planifika por DrimSoft. Todos los derechos reservados.
      </footer>
    </div>
  );
}
