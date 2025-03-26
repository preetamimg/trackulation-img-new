export const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const isOTPExpired = (expiresAt: Date) => new Date() > expiresAt;
