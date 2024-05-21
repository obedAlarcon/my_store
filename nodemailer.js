const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  secure: true, // Use `true` for port 465, `false` for all other ports
  port: 465,
    auth: {
        user: 'desarrolloc20@gmail.com',
        pass: 'vxcb fzgu gqfw pzbr', // esta es la contraseña de la app de gmail
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'desarrolloc20@gmail.com', // sender address
    to: "movil3526@hotmail.com", // list of receivers
    subject: "este es un correo de prueba NodeApp✔", // Subject line
    text: "Hello movil3526?", // plain text body
    html: "<b>hola movil?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendMail();
