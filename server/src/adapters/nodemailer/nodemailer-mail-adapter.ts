import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ca4e67097fc2fb",
    pass: "facbb31f15b4e8",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feeget <oi@feedget.com>",
      to: "Rafael Menezes <ctpmmg2009_101@hotmail.com>",
      subject,
      html: body,
    });
  }
}
