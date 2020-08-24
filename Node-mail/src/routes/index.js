const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {

    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>

        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>

        <p>${message}</p>
    `;

    const transpoerter = nodemailer.createTransport({
        host: 'mail.fazttech.xyz',
        port: 26,
        secure: false, //sin ssl
        auth: {
            user: 'test@fazttech.xyz',
            pass: 'contraseña'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transpoerter.sendMail({
        from: "'FaztTech Server' <test@fazttech.xyz>",
        to: 'franco.gb17@gmail.com',
        subject: 'Website Contact Form',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);

    res.redirect('/success.html');
});

module.exports = router;