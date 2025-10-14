# Configuración de Email para Planifika

## Instalación y configuración

1. **Variables de entorno**: Se ha creado un archivo `.env.local` con la API key de Resend.

2. **Dependencias instaladas**:
   - `resend`: Para el envío de emails
   - `express`: Servidor backend
   - `cors`: Para permitir peticiones desde el frontend
   - `dotenv`: Para cargar variables de entorno

## Cómo ejecutar

### 1. Iniciar el servidor backend
```bash
npm run server
```
Esto iniciará el servidor en el puerto 3001.

### 2. Iniciar el frontend
```bash
npm run dev
```
Esto iniciará la aplicación React en el puerto 5173.

## Funcionalidad

- Cuando un usuario completa el formulario empresarial, los datos se envían al servidor backend
- El servidor procesa los datos y envía un email a `drimsoft8@gmail.com` usando Resend
- El email incluye toda la información del formulario en formato HTML
- El usuario ve un mensaje de confirmación después del envío exitoso

## Estructura del email

El email enviado incluye:
- Nombre de la empresa
- Persona de contacto
- Correo electrónico
- Teléfono
- Número de accesos solicitados

## Notas importantes

- Asegúrate de que el servidor backend esté ejecutándose antes de probar el formulario
- La API key de Resend está configurada para enviar emails desde `onboarding@resend.dev`
- Los emails se envían a `drimsoft8@gmail.com`
