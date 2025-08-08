/* Connection pool configuration */
export const CONNECTION_POOL_CONFIG = {
  max: 20,
  min: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.DB_CA_CERT
  }
};