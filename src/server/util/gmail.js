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
        clientId:'30395727291-uik3hhpu2vasu3glr0qr6q48me162t6e.apps.googleusercontent.com',
        clientSecret: 'pSVUumWAhuFWlnVQdFnIpJzl',
        refreshToken: '1/RansLaONqkfntYnFwXFXid2wh7rUhBtnfSS1RiKWMMg',
        accessToken: 'ya29.GlttBllLf6QiMvBoT8dTCqqFx0trxVfwP0ttWI6We4GhWxlDictzR2JW6xySZUfU6VlFgGu3sfzDfxryu2IwFTi9CTOSsz0vRlsrXXAHTWKoJ5oWcF032UIkxpuu'
    }
});

//client id - 30395727291-uik3hhpu2vasu3glr0qr6q48me162t6e.apps.googleusercontent.com
//client scret - pSVUumWAhuFWlnVQdFnIpJzl
//refresh token - 1/RansLaONqkfntYnFwXFXid2wh7rUhBtnfSS1RiKWMMg
//access token - ya29.GlttBllLf6QiMvBoT8dTCqqFx0trxVfwP0ttWI6We4GhWxlDictzR2JW6xySZUfU6VlFgGu3sfzDfxryu2IwFTi9CTOSsz0vRlsrXXAHTWKoJ5oWcF032UIkxpuu


//30395727291-ftjsqgpg9kih1biafgbdpr1777ped579.apps.googleusercontent.com
//x36EUSnW4WyM9o719p5IHHp1

export { transporter };