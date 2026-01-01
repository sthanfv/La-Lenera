import pino from 'pino';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Professional Logger Configuration
 * - No sensitive data logging by default
 * - Pretty printing in development
 * - Secure and fast for production
 */
export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: {
    env: process.env.NODE_ENV,
    revision: process.env.VERCEL_GIT_COMMIT_SHA || 'local',
  },
  redact: {
    paths: ['password', 'secret', 'token', 'email', 'phone', 'address'],
    remove: true,
  },
  transport: isProduction
    ? undefined
    : {
      target: 'pino-pretty',
      options: {
        colorize: true,
        ignore: 'pid,hostname',
      },
    },
});

export default logger;
