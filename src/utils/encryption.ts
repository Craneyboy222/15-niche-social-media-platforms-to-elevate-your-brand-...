import crypto from 'crypto';

export const encrypt = (text: string, secret: string): string => {
  const cipher = crypto.createCipher('aes-256-ctr', secret);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

export const decrypt = (text: string, secret: string): string => {
  const decipher = crypto.createDecipher('aes-256-ctr', secret);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};