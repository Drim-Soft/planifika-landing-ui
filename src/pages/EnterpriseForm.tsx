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

  const [company, setCompany] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [accessCount, setAccessCount] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async () => {
    const payload = {
      company,
      fullName,
      email,
      phone,
      accessCount: Number(accessCount),
    };

    const response = await fetch("http://localhost:8080/api/mail/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Error enviando correo");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await sendEmail();
      setSubmitted(true);
      setTimeout(() => navigate('/'), 10000);
    } catch (err) {
      setError('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
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

          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left">

              {/* Nombre empresa */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Nombre de la empresa</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Correo empresarial</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@empresa.com"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
              </div>

              {/* Teléfono */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Teléfono de contacto</label>
                <PhoneInput
                  country="co"
                  value={phone}
                  onChange={(value: string) => setPhone(value)}
                  enableSearch
                  disableSearchIcon
                  inputClass="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none text-gray-800"
                  dropdownClass="text-gray-700 bg-white shadow-lg border border-gray-300"
                  inputProps={{ name: 'phone', required: true }}
                />
              </div>

              {/* Accesos */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Total de accesos a comprar
                </label>
                <input
                  type="number"
                  value={accessCount}
                  onChange={(e) => setAccessCount(e.target.value)}
                  placeholder="Ej. 1200"
                  min={501}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3A6EA5] outline-none"
                />
                <p className="text-sm text-gray-500 mt-1">
                  *El mínimo permitido es de 501 accesos.
                </p>
              </div>

              {error && (
                <div className="md:col-span-2">
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                </div>
              )}

              {/* Botón */}
              <div className="md:col-span-2 text-center mt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="px-12 py-4 bg-[#3AA657] hover:bg-[#2F8A48] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-poppins text-lg rounded-xl shadow-md hover:shadow-lg"
                >
                  {loading ? 'Enviando...' : 'Enviar solicitud'}
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
