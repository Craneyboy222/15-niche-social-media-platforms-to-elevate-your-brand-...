/* Backup configuration */
export const BACKUP_CONFIG = {
  frequency: 'daily',
  time: '02:00',
  retentionPeriod: 30, // days
  storage: {
    provider: 'AWS S3',
    bucketName: 'enterprise-app-backups',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
};