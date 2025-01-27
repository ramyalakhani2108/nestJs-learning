import { registerAs } from '@nestjs/config';

// it is good to use process env becuase this is okay to use inside this.
export default registerAs('appConfig', () => ({
  environments: process.env.NODE_ENV || 'production',
  apiVersion: process.env.API_VERSION,
  mailHost: process.env.MAIL_HOST,
  smtpUsername: process.env.SMTP_USERNAME,
  smtpPassword: process.env.SMTP_PASSWORD,
}));
