import { Request, Response } from "express";
import prisma from "../prisma";
import * as bcrypt from "bcrypt"
import { Registration } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { createClient } from 'soap';
import axios from "axios";
import { resolve } from "dns/promises";
import xml2js from "xml2js";

async function transfer(req: Request<{}, {}, any>, res: Response){
    const { senderId, recieverId, transferAmount } = req.body as { senderId: number, recieverId:number, transferAmount:number }
    try{
        const body = `
        <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Header>
            <ApiKey>7tdfSmthU3iT5k6iSLMZUN3sXwfcKVH2RXWsZSwhtZTxXRXWugJcLk3C6juhza7LXaEyzJK1Jq4un58KC9Pre1hFof7hSvzDRsmaPBlKxc8RUcfDtERIQUMFlIBtqpK5</ApiKey>
            <Username>rest_service</Username>
        </Header>
        <Body>
            <transferBalance xmlns="http://services/">
                <arg0 xmlns="">${senderId}</arg0>
                <arg1 xmlns="">${recieverId}</arg1>
                <arg2 xmlns="">${transferAmount}</arg2>
            </transferBalance>
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
        // console.log(result);
        res.status(result.status)
        xml2js.parseString(result.data, {explicitArray: false, tagNameProcessors: [xml2js.processors.stripPrefix]},(err, retval) => {
            if (err) {
                res.status(500).end()
            }
            var soapBody = retval.Envelope.Body;
            if (soapBody.$) {
                delete soapBody.$;
            }
            res.json({success: soapBody.transferBalanceResponse.return == 'true'})
        });


    }catch(error){  
        console.error(error)
        res.status(400)
    }
}

async function topup(req: Request<{}, {}, any>, res: Response) {
    console.log(req.body)
    console.log(req.params)
    // const { userId } = req.params as { userId: string }
    const { amount, userId } = req.body as { amount: number, userId: number }

    try{
        const body = `
        <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Header>
            <ApiKey>7tdfSmthU3iT5k6iSLMZUN3sXwfcKVH2RXWsZSwhtZTxXRXWugJcLk3C6juhza7LXaEyzJK1Jq4un58KC9Pre1hFof7hSvzDRsmaPBlKxc8RUcfDtERIQUMFlIBtqpK5</ApiKey>
            <Username>rest_service</Username>
        </Header>
        <Body>
            <topUp xmlns="http://services/">
                <arg0 xmlns="">${userId}</arg0>
                <arg1 xmlns="">${amount}</arg1>
            </topUp>
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
        

        res.status(result.status)
        xml2js.parseString(result.data, {explicitArray: false, tagNameProcessors: [xml2js.processors.stripPrefix]},(err, retval) => {
            if (err) {
                res.status(500).end()
            }
            var soapBody = retval.Envelope.Body;
            if (soapBody.$) {
                delete soapBody.$;
            }
            res.json({success: soapBody.topUpResponse.return == 'true'})
        });

    }catch(error){  
        console.error(error)
        res.status(500)
    }
    res.end()
}

export default {
    transfer,
    topup
  };
