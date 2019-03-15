// Sample CalendarAPI settings
const SERVICE_ACCT_ID = 'sigma-site@sigma-site-225003.iam.gserviceaccount.com';
// const KEYFILE = 'your-google-api-keyfile.pem';              //path to pem key
const TIMEZONE = 'UTC+06:00';
const CALENDAR_ID = {
    'primary': 'joseph.fenderson@gmail.com',
    'calendar-1': 'https://calendar.google.com/calendar?cid=am9zZXBoZmVuZGVyc29uQGdtYWlsLmNvbQ',
    'calendar-2': 'calendar2@group.calendar.google.com'
};
const key = require('../../../googleapi-key.json').private_key;
module.exports.key = key;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
// module.exports.keyFile = KEYFILE;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;