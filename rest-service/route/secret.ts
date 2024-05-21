import axios from "axios";
import { Router } from "express";
import { createClient } from "soap";

const SecretRouter = Router();

SecretRouter.get('/:number', async function(req, res, next) {
    try {
        const body = `
        <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Header>
            <ApiKey>7tdfSmthU3iT5k6iSLMZUN3sXwfcKVH2RXWsZSwhtZTxXRXWugJcLk3C6juhza7LXaEyzJK1Jq4un58KC9Pre1hFof7hSvzDRsmaPBlKxc8RUcfDtERIQUMFlIBtqpK5</ApiKey>
            <Username>rest_service</Username>
        </Header>
        <Body>
            <getSecret xmlns="http://services/"/>
        </Body>
        </Envelope>
        `

        const result = await axios.post(
            process.env.SOAP_SERVICE_URL || '',
            body,
            {
                headers: {
                    "Content-Type": "text/xml",
                }
            }
        );

        res.json(result.data)
    }
    catch (err) {
        console.error(err);
        next(err);
    }
})

export default SecretRouter;