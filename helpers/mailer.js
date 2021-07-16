const {SENDGRID_API_KEY, BACKEND_URL} = require('../config')
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(SENDGRID_API_KEY);

module.exports = {
    // sendPasswordResetMail: (email, resetToken) =>sendGridMail.send({
    //     to: email,
    //     from: 'dahyor@outlook.com',
    //     subject: 'Password Reset',
    //     text: `You are receiving this because you have requested the reset of the password for your account.
    //     Please click on the following link, or paste this into your browser to complete the process
    //
    //     http://localhost:5000/auth/password-reset/${resetToken.token}
    //
    //      Token: ${resetToken.token}
    // `
    // })
    //     .then((r)=> console.log(r[0].statusCode)),

    sendAccountVerificationMail: (email, verifyToken) =>sendGridMail.send({
        to: email,
        from: 'dahyor@outlook.com',
        subject: 'Verify your account',
        text: `You are receiving this because you created an account on eazziDeclutter
    click on the link below to activate your account
        
        ${BACKEND_URL}/api/auth/verify/${verifyToken}
        
         Token: ${verifyToken}
    `
    })
        .then((r)=> console.log(r[0].statusCode)),
}