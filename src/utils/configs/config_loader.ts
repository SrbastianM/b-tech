export const loadEnv = () => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    console.warn('Theres not a jwt key');
  }
  return {
    secretKey: JWT_SECRET!,
  };
};
