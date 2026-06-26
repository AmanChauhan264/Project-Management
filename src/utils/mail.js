import Mailgen from "mailgen";

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
    forgotPasswordMailgenContent
};