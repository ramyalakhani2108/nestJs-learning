import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';

@Injectable()
export class MailService {
  constructor(
    /**
     * Injecting mailer service
     */
    private readonly mailerService: MailerService,
  ) {}

  public async sendUserWelcomMail(user: User): Promise<void>{
    await this.mailerService.sendMail({
      to: user.email,
      from: 'On-boarding Team <no-reply@nestjs-blog.com>',
      subject: 'Welcome to nestJs Blog',
      template: './welcome',
      context: {
        name: user.firstName,
        email: user.email,
        loginUrl: 'http://localhost:3000',
      },
    });
  }
}
