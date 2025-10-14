// Configuración de variables de entorno
export const ENV = {
  EXTERNAL_BASE_URL: import.meta.env.VITE_EXTERNAL_BASE_URL || 'http://localhost:3000',
  SIGNUP_URL: import.meta.env.VITE_SIGNUP_URL || 'http://localhost:3000/pages/signup',
  STUDENT_LOGIN_URL: import.meta.env.VITE_STUDENT_LOGIN_URL || 'http://localhost:3000/pages/student-login',
} as const;

// URLs específicas con parámetros
export const getSignupUrl = (role: string | number) => `${ENV.SIGNUP_URL}?role=${role}`;
export const getStudentLoginUrl = () => ENV.STUDENT_LOGIN_URL;
