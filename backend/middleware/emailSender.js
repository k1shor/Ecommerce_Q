const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
async function emailSender(mailOptions){
  try{
  const info = await transporter.sendMail({
    from: mailOptions.from,//'"Maddison Foo Koch" <maddison53@ethereal.email>'
    to: mailOptions.to,//"bar@example.com, baz@example.com"
    subject: mailOptions.subject, //"Hello ✔",
    text:mailOptions.text, //"Hello world?", // plain‑text body
    html:mailOptions.html //"<b>Hello world?</b>", // HTML body
      });

    console.log("Message sent:", info.messageId);
    return info;
      } 
    catch(error){
    console.error("Failed to send email:",error.message);
    throw error;
    }
}

module.exports = emailSender;