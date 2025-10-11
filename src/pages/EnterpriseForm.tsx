import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export function EnterpriseForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [empresa, setEmpresa] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [accesos, setAccesos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => navigate('/'), 10000); // Simula envío y redirige al inicio
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] p-6 flex flex-col">
      {/* Header */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 w-full">
        <div className="flex items-center justify-between p-8 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <Logo className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-[#222831] font-poppins">Planifika</h1>
          </div>
          <Button
            onClick={() => navigate('/plans')}
            className="font-poppins bg-[#3A6EA5] hover:bg-[#2E5A8A] text-white"
          >
            ← Volver a planes
          </Button>
        </div>

        {/* Formulario */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-[#222831] font-poppins text-center mb-10">
            Solicitud de contacto para plan empresarial
          </h2>

          {!enviado ? (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left">
              {/* Nombre empresa */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Nombre de la empresa</label>
                <input
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ0-9 ]/g, ''))}
                  placeholder="Ej. Universidad de la Sabana"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
              </div>

              {/* Nombre persona */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre de la persona</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ ]/g, ''))}
                  placeholder="Ej. Juan Pérez"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
              </div>

              {/* Correo empresarial */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Correo empresarial</label>
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="nombre@empresa.com"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
              </div>

              {/* Número de teléfono */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Teléfono de contacto</label>
                <PhoneInput
                  country="co"
                  value={telefono}
                  onChange={(phone: string) => setTelefono(phone)}
                  enableSearch
                  disableSearchIcon
                  preferredCountries={['co', 'mx', 'us', 'es', 'ar', 'br']}
                  countryCodeEditable={false}
                  inputClass="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none text-gray-800"
                  buttonClass="border-gray-300 bg-white rounded-l-md"
                  dropdownClass="text-gray-700 bg-white shadow-lg border border-gray-300"
                  inputProps={{ name: 'telefono', required: true }}
                />
              </div>
                {/* Total de accesos */}
                <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                    Total de accesos a comprar
                </label>
                <input
                    type="number"
                    value={accesos}
                    onChange={(e) => {
                    // Permitir solo números, sin filtrar todavía
                    const value = e.target.value.replace(/\D/g, '');
                    setAccesos(value);
                    }}
                    onBlur={() => {
                    // Validar cuando el usuario salga del input
                    if (accesos && parseInt(accesos) < 501) {
                        setAccesos('501');
                    }
                    }}
                    placeholder="Ej. 1200"
                    min={501}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
                <p className="text-sm text-gray-500 mt-1">
                    *El mínimo permitido es de 501 accesos.
                </p>
                </div>
              {/* Botón */}
              <div className="md:col-span-2 text-center mt-6">
                <Button
                  type="submit"
                  className="px-12 py-4 bg-[#3AA657] hover:bg-[#2F8A48] text-white font-poppins text-lg rounded-xl shadow-md hover:shadow-lg"
                >
                  Enviar solicitud
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-[#3AA657] font-poppins mb-3">
                ¡Solicitud enviada con éxito!
              </h3>
              <p className="text-gray-600 font-inter">
                Nuestro equipo se pondrá en contacto contigo muy pronto.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 font-inter">
        © 2025 Planifika por DrimSoft. Todos los derechos reservados.
      </footer>
    </div>
  );
}
