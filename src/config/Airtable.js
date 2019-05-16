import Airtable from airtable
import airtableKey from "./.env.js";

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtableKey
});
var base = Airtable.base('apporjVCnz1NflfHQ');