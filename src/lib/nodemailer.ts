import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  // https://stackoverflow.com/questions/28527561/sending-email-to-multiple-recipients-via-nodemailer
  // YOU CAN DO THIS:
  // to: ["info@drive2learn.co.uk", "drive2learn.alex@gmail.com", "drive2learn.info@gmail.com"]
  to: email,
};
