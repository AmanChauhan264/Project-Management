import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async(options) =>{
  const MailGenerator =   new Mailgen ({
        theme: "default",
        product:{
            name: "TaskManager",
            link:"http://taskmanagelink.com"
        }
    })

    const EmailTextual = MailGenerator.generatePlaintext(options.mailgenContent)
    const EmailHtml = MailGenerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service failed. Make sure that you have provided your mailtrap credential in the .env file")
        cnosle.error("Error:", error)
    }
}


const emailVerificationMailgenContent = (username, verificationUrl ) => {
    return {
        body: {
            name: username,
            intro: " Welcom to our app we're excited to have you onboard.",
            action: {
                instruction: " To verify your email please click on the following button",
                button: {
                    color: "#22BC66",
                    test: "Verify your email",
                    link: verificationUrl
                },
            },
            outro: "Need help, or have questios? just reply to this email, we'd love to help.",
        }
    }
}

const forgotPasswordMailgenContent = (username, passwordResetUrl ) => {
    return {
        body: {
            name: username,
            intro: " we got a request to reset the password of your account.",
            action: {
                instruction: " to reset your password click on the following button or link.",
                button: {
                    color: "#22BC66",
                    test: "Reset password",
                    link: passwordResetUrl
                },
            },
            outro: "Need help, or have questios? just reply to this email, we'd love to help.",
        }
    }
}

export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sendMail,
};