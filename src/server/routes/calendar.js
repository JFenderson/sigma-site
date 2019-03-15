import CONFIG from '../util/setting';
import CalendarAPI from 'node-google-calendar';
import { Router } from 'express';
let cal = new CalendarAPI(CONFIG);
let router = Router();  
let calendarId = CONFIG.calendarId;

// let params = {
//   timeMin: '2018-12-01T06:00:00+08:00',
//   timeMax: '2019-012-01T22:00:00+08:00',
//   q: 'query term',
//   singleEvents: true,
//   orderBy: 'startTime'
// };  //Optional query parameters referencing google APIs

router.get('/', (req, res) => {
//   cal.Events.list(calendarId.primary, params)
//     .then(json => {
//     //Success
//     console.log('List of events on calendar within time-range:');
//     console.log(json);
//     res.sendStatus(200)
//     }).catch(err => {
//     //Error
//     console.log('Error: listSingleEvents -' + err.message);
//     res.sendStatus(404);
//     });

let eventsArray = [];
let params = {};
return cal.Events.list(calendarId, params, {})
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            let event = {
                id: json[i].id,
                summary: json[i].summary,
                location: json[i].location,
                start: json[i].start,
                end: json[i].end,
                status: json[i].status
            };
            eventsArray.push(event);
        }
        console.log('List of all events on calendar');
        console.log(eventsArray);
        return eventsArray;
    }).catch(err => {
        console.log('Error: listAllEventsInCalendar', err.message);
    });
})

export default router;