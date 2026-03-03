const required = (value: string | undefined, name: string) => {
  if (!value) {
    throw new Error(`Environment variable ${name} is required`);
  }
  return value;
};

export const ENV = {
  API_BASE_URL: required(
    import.meta.env.VITE_API_BASE_URL,
    "VITE_API_BASE_URL",
  ),
};
