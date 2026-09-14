import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Helper to escape HTML characters
function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint (useful for Dokploy / Docker health checks)
app.get(['/health', '/api/health'], (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Contact Form Submission Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { _honey } = req.body;
    // Honeypot spam protection
    if (_honey) {
      return res.status(200).json({ success: true });
    }

    const name = (req.body.Nombre || req.body.nombre || req.body.name || '').trim();
    const email = (req.body.Email || req.body.email || '').trim();
    const message = (req.body.Mensaje || req.body.mensaje || req.body.message || '').trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Todos los campos son obligatorios / All fields are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'El formato de correo no es válido / Invalid email format.'
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[Resend Error]: RESEND_API_KEY environment variable is not configured.');
      return res.status(500).json({
        success: false,
        error: 'El servicio de correo no está configurado (falta RESEND_API_KEY).'
      });
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.DESTINATION_EMAIL || process.env.TO_EMAIL || 'contacto@solucioneshospedadas.com';
    const fromEmail = process.env.FROM_EMAIL || 'Soluciones Hospedadas <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Has recibido un nuevo mensaje de contacto desde solucioneshospedadas.com:\n\nNombre: ${name}\nEmail: ${email}\nMensaje:\n${message}\n`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #006591; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #006591; margin: 0; font-size: 20px;">Soluciones Hospedadas</h2>
            <p style="color: #64748b; font-size: 13px; margin: 4px 0 0;">Nuevo mensaje recibido desde el formulario web</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; width: 130px; color: #64748b; font-size: 14px; font-weight: 600;">Nombre:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;">Correo:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">
                <a href="mailto:${escapeHtml(email)}" style="color: #006591; text-decoration: none;">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0 4px; color: #64748b; font-size: 14px; font-weight: 600;" colspan="2">Mensaje:</td>
            </tr>
            <tr>
              <td colspan="2" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; font-size: 12px; color: #94a3b8; text-align: center;">
            Puedes responder directamente a este correo para contestar a <strong>${escapeHtml(name)}</strong>.
          </div>
        </div>
      `
    });

    if (error) {
      console.error('[Resend API Error]:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Error al enviar el correo mediante Resend.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente.',
      id: data?.id
    });
  } catch (err) {
    console.error('[Server Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor al procesar la solicitud.'
    });
  }
});

// Serve static assets (HTML, images, CSS, etc.)
app.use(express.static(__dirname));

// Fallback to index.html for root or unknown static routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`> Server running on port ${PORT}`);
});
