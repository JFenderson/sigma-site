import {transporter} from '../util/gmail';
import nodemailer from 'nodemailer';
import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let classification = req.body.classification;

    const mailOption = {
        from: 'joseph.fenderson@gmail.com',// who the email is coming from..in the contact form
        to: `${name} <${email}>`,//who the email is going to
        subject: `${name} Thank you for your inquiry`,//subject line
        html: `<div style="text-align: center; margin: auto; margin-right: auto 0; border: 1px solid; padding: 10px; width: 50%; height: auto;">
        <h1>Hey ${name},</h1> 
        <h1>Thank you for your inquiry into the Sigma Chapter of Phi Beta Sigma Fraternity Inc. We will be contacting you soon to discuss with you any details you may need.</h1>
        <h1>I look forward to speaking with you about our wonderous band of brotherhood of Phi Beta Sigma</h1>
        <h1>Fraternally,</h1>
        <h1>Demetri Thornton - President of the Sigma Chapter of Phi Beta Sigma</h1>
      </div>`,
    };



    transporter.sendMail(mailOption,(error)=> {
        if (error) {
            console.log(error);
            res.sendStatus(400)
        } else {
            console.log('email sent!')
            res.sendStatus(200);
        }
        transporter.close();
    });
})


export default router;