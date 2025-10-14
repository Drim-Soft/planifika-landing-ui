import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno desde .env.local
dotenv.config({ path: join(__dirname, '.env.local') });

console.log('API Key loaded:', process.env.RESEND_API_KEY ? 'YES' : 'NO');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY || 're_RcNWEaeZ_DjDQ7DegAP7AE4GXJtCk5oCc');

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Middleware para debug
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.post('/api/send-enterprise-email', async (req, res) => {
  try {
    console.log('API Key:', process.env.RESEND_API_KEY ? 'Presente' : 'Faltante');
    console.log('Request body:', req.body);
    
    const { company, fullName, email, phone, accessCount } = req.body;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3A6EA5;">Nueva solicitud de plan empresarial</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #222831; margin-top: 0;">Información de la empresa:</h3>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Persona de contacto:</strong> ${fullName}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Accesos solicitados:</strong> ${accessCount}</p>
        </div>
        <p style="color: #666;">Esta solicitud fue enviada desde el formulario de Planifika.</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'drimsoft8@gmail.com',
      subject: `Nueva solicitud empresarial - ${company}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log('Email sent successfully:', data);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
