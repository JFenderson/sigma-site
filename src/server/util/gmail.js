import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'joseph.fenderson@gmail.com',
        clientId:'',
        clientSecret: '',
        refreshToken: '',
        accessToken: ''
    }
});

export { transporter };