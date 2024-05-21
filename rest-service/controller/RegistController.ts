import { Request, Response } from "express";
import prisma from "../prisma";
import * as bcrypt from "bcrypt"
import { Registration } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { createClient } from 'soap';
import axios from "axios";

async function createRegist(req: Request<{}, {}, any>, res: Response){
    const { email, username, password } = req.body as { email: string, username: string, password: string}
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);
    const regist = await prisma.registration.create({data: {email, username, password: hashedPassword}})
    res.json(regist);
}

async function getRegist(req: Request<{}, {}, any>, res: Response){
    const regist = await prisma.registration.findMany();
    res.json(regist);
}

async function acceptRegist(req: Request<{}, {}, any>, res: Response){
    const { registId } = req.params as { registId: string }
    

    const regist = await prisma.registration.findUnique({
        where: {
            registId: parseInt(registId)
        }
    })

    if(!regist){
        throw ("Registration not found")
    }


    const accept = await prisma.user.create({data: {email: regist.email, username: regist.username, password: regist.password}})
    try{
        const body = `
        <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Header>
            <ApiKey>7tdfSmthU3iT5k6iSLMZUN3sXwfcKVH2RXWsZSwhtZTxXRXWugJcLk3C6juhza7LXaEyzJK1Jq4un58KC9Pre1hFof7hSvzDRsmaPBlKxc8RUcfDtERIQUMFlIBtqpK5</ApiKey>
            <Username>rest_service</Username>
        </Header>
        <Body>
            <checkBalance xmlns="http://services/">
                <arg0 xmlns="">${registId}</arg0>
            </checkBalance>
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

        res.status(200)


    }catch(error){  
        console.error(error)
        res.status(400)
    }

    const erase = await prisma.registration.delete({
        where: {
            registId: parseInt(registId)
        }
    })

    res.json(regist);
}

async function rejectRegist(req: Request<{}, {}, any>, res: Response){
    const { registId } = req.params as { registId: string }

    const regist = await prisma.registration.findUnique({
        where: {
            registId: parseInt(registId)
        }
    })

    if(!regist){
        throw ("Registration not found")
    }

    res.json(regist);

    const erase = await prisma.registration.delete({
        where: {
            registId: parseInt(registId)
        }
    })
}

export default {
    createRegist,
    getRegist,
    acceptRegist,
    rejectRegist
};