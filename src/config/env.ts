// Configuración de variables de entorno
export const ENV = {
  PLANIFIKA_BASE_URL: import.meta.env.VITE_PLANIFIKA_BASE_URL,
} as const;

// URLs específicas con parámetros
export const getSignupUrl = (role: string | number) => `${ENV.PLANIFIKA_BASE_URL}/pages/signup?role=${role}`;
export const getStudentLoginUrl = () => `${ENV.PLANIFIKA_BASE_URL}/pages/student-login`;
