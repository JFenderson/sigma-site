import fs from 'fs';
import readline from 'readline';
import {google} from 'googleapis';
import {Router} from 'express';
import  CONFIG from '../util/setting';
import  CalendarAPI from 'node-google-calendar';
import moment from 'moment';

const router = Router();
let cal = new CalendarAPI(CONFIG);  
let calID = CONFIG.calendarId.primary;
//'2019-02-01T22:00:00+08:00'
let params = {
    timeMin: (new Date()).toISOString(),
    timeMax: moment(new Date()).add(20, 'days').toISOString(),
    singleEvents: true,
    maxResults: 10,
}; 	//Optional query parameters referencing google APIs

router.get('/', (req, res, next) => {
    cal.Events.list(calID, params)
    .then(json => {
         res.json(json)
      }).catch(err => {
        console.log('Error: listSingleEvents -' + err.message);
      });
})

export default router;