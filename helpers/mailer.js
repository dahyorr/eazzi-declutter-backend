const {SENDGRID_API_KEY, HOST} = require('../config')
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(SENDGRID_API_KEY);

module.exports = {
    sendPasswordResetMail: (email, resetToken) =>sendGridMail.send({
        to: email,
        from: 'dahyor@outlook.com',
        subject: 'Password Reset',
        text: `You are receiving this because you have requested the reset of the password for your account.
        Please click on the following link, or paste this into your browser to complete the process
        
        ${HOST}/auth/password-reset/${resetToken.token}
        
         Token: ${resetToken.token}
    `
    })
        .then((r)=> console.log(r[0].statusCode)),

    sendAccountVerificationMail: (email, verifyToken) =>sendGridMail.send({
        to: email,
        from: 'dahyor@outlook.com',
        subject: 'Verify your account',
        text: `You are receiving this because you created an account on eazziDeclutter
        click on the link below to activate your account
        
        ${HOST}/api/auth/verify/${verifyToken}
        
         Token: ${verifyToken}
    `
    })
        .then((r)=> console.log(r[0].statusCode)),

    sendOrderInTransitMail: (order) =>sendGridMail.send({
        to: order.email,
        from: 'dahyor@outlook.com',
        subject: 'Order Confirmation',
        text: `This is to inform you that payment for your order has been confirmed and your
order will be shipped in 7 working days

Items:
    ${order.items.map((item) => `\n\t${item.product.title} X${item.quantity}`)}
    
    Total Price:  ${order.totalPrice}
    
Thank you for your patronage
    `
    })
        .then((r)=> console.log(r[0].statusCode)),
}