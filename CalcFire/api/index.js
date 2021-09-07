const MailerLite = require('mailerlite-api-v2-node').default

const mailerLite = MailerLite('edd1c8cddfd55a3b27ec9bf0ad4a9d82')


export default (req, res) => {
    console.log(req);
    mailerLite.addSubscriberToGroup(108014935, {
        email : req.body.email
    })
}