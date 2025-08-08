/* Event configuration */
export const EVENT_CONFIG = {
  eventTypes: ['USER_REGISTERED', 'SNAP_UPLOADED', 'MESSAGE_SENT', 'STORY_POSTED'],
  logLevel: 'info',
  errorTracking: {
    service: 'Sentry',
    dsn: process.env.SENTRY_DSN
  },
  auditLog: {
    enabled: true,
    storage: 'database',
    tableName: 'audit_logs'
  }
};