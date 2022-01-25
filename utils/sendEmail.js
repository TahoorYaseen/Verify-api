const nodemailer = require('nodemailer');


const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
     host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'dexter.pollich58@ethereal.email',
     pass: 'qufYxsbhdtr5CA3Azh'
  },
   tls:{
        rejectUnauthorized:false
    },
  });

  return transporter.sendMail({
    from: '"Tahoor Yaseen" <tahooryaseen@gmail.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
