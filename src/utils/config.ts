/* Configuration */

import dotenv from 'dotenv';
dotenv.config();

export const config = {
  databaseUrl: process.env.DATABASE_URL || 'postgresql://localhost:5432/myapp',
  jwtSecret: process.env.JWT_SECRET || 'default_secret',
  awsS3BucketName: process.env.AWS_S3_BUCKET_NAME || 'myapp-bucket',
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
};