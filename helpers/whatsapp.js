require('dotenv')
const client = require('twilio')();

module.exports = {
    sendOrderNotification: (order) => {
        client.messages.create({
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+2348026265447',
            body: `A new order from "${order.name}" with id #${order.id} visit the admin platform to process and confirm the order`
        }).then(message => console.log(message));
    },
    sendTestMessage: (order) => {
        client.messages.create({
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+2348026265447',
            body: `A customer has created a new order with id #${order.id} visit the admin platform to process
            and confirm the order`
        }).then(message => console.log(message));
    }
}