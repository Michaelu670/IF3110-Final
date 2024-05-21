import { createClientAsync } from "soap";

const SOAP_URL = process.env.SOAP_SERVICE_URL;
const API_KEY = process.env.SOAP_SERVICE_API_KEY;

async function createClient() {
  const client = await createClientAsync(SOAP_URL + "");
  return client;
}

export default {
  createClient
};
