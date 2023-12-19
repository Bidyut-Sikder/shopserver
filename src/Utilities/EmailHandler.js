
const nodemailer = require('nodemailer')



exports.EmailSend = async (SendTo, MailText, MailSub) => {

    const transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: 'Medicine Shop <info@teamrabbil.com>',
        to: SendTo,
        subject: MailSub,
        text: MailText
    }
    return await transporter.sendMail(mailOptions)
}




















