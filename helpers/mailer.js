const {SENDGRID_API_KEY} = require('../config')
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(SENDGRID_API_KEY);

module.exports = {
    sendPasswordResetMail: (email, resetToken) =>sendGridMail.send({
        to: email,
        from: 'dahyor@outlook.com',
        subject: 'Password Reset',
        text: `You are receiving this because you have requested the reset of the password for your account.
        Please click on the following link, or paste this into your browser to complete the process
        
        http://localhost:5000/auth/password-reset/${resetToken.token}
        
         Token: ${resetToken.token}
    `
    })
        .then((r)=> console.log(r[0].statusCode)),

    sendAccountActivationMail: (email, resetToken) =>sendGridMail.send({
        to: email,
        from: 'dahyor@outlook.com',
        subject: 'Activate your account',
        text: `You are receiving this because an account has been created for you on Instiq HR App.
        Please click on the following link, to activate your account and change your password
        
        http://localhost:5000/auth/password-reset/${resetToken.token}
        
         Token: ${resetToken.token}
    `
    })
        .then((r)=> console.log(r[0].statusCode)),
}