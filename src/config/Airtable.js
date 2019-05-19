//import { airtableKey } from "./.env.js";

const airtableKey = process.env.airtableKey;
var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: airtableKey
});
var airtabelBase = Airtable.base("apporjVCnz1NflfHQ");
export default airtabelBase;
