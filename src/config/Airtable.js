//import { airtableKey } from "./.env.js";
import Airtable from "airtable";

const airtableKey = process.env.airtableKey;
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: airtableKey
});
var airtabelBase = Airtable.base("apporjVCnz1NflfHQ");
export default airtabelBase;
