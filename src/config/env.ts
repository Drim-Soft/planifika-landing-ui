// Configuración de variables de entorno
export const ENV = {
  PLANIFIKA_BASE_URL: import.meta.env.VITE_PLANIFIKA_BASE_URL,
  SUBSCRIPTION_API_URL: import.meta.env.VITE_SUBSCRIPTION_API_URL,
  ORGANIZATION_API_URL: import.meta.env.VITE_ORGANIZATION_API_URL,
} as const;

// URLs específicas con parámetros
export const getSignupUrl = (role: string | number, organizationId?: number | null) => {
  const baseUrl = `${ENV.PLANIFIKA_BASE_URL}/pages/signup?role=${role}`;
  if (organizationId) {
    return `${baseUrl}&organizationId=${organizationId}`;
  }
  return baseUrl;
};
export const getStudentLoginUrl = () => `${ENV.PLANIFIKA_BASE_URL}/pages/student-login`;
