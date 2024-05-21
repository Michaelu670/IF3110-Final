import { Request, Response } from "express";
import prisma from "../prisma";
import { User, Connected_account } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import jwt from '../middleware/auth';
import { Prisma } from "@prisma/client";
import auth from "../middleware/auth";
import { request } from "http";
import xml2js from "xml2js";
import axios from "axios";

async function createUser(req: Request<{}, {}, any>, res: Response){
    const { email, username, password } = req.body as { email: string, username: string, password: string}
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);
    const wallet = await prisma.user.create({data: {email, username, password: hashedPassword}})
    res.json(wallet);
}

async function checkUser(req: Request<{}, {}, any>, res: Response){
  console.log("masuk check")
  try{
  const user: {
    userId: number,
    email: string,
    username: string,
    password: string,
    admin: boolean,
} | { TokenAvailability: boolean} | null  | undefined= await auth.authenticate(req)

  if(!user || user == null){
    throw ("ERROR AUTHENTICATE")
  }

  res.json({isAdmin: user.admin, userID: user.userId});

}catch(err){
    res.status(400).json({info: "No tokens found"})
}
}

async function verifyUser(req: Request<{}, {}, any>, res: Response){
  const { username, password } = req.body as { username: string, password: string}
  const user = await prisma.user.findUnique({
    where: {
      username
    },
  });
  if (!user) {
    throw (`Username not found`);
  }

  const verification = await bcrypt.compare(password, user.password)
  // TODO: error handler
  if(!verification){
    throw ('Incorrect password')
  }

  const accessToken = jwt.createToken(username);

  res.status(200).json({
    msg: "Logged In!",
    accessToken: accessToken,
    username
  });
}

async function checkBalance(req: Request<{}, {}, any>, res: Response){
  const ret: any = await auth.authenticate(req);
  const { userId } = ret as { userId: string }
  
  const body = `
    <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Header>
        <ApiKey>7tdfSmthU3iT5k6iSLMZUN3sXwfcKVH2RXWsZSwhtZTxXRXWugJcLk3C6juhza7LXaEyzJK1Jq4un58KC9Pre1hFof7hSvzDRsmaPBlKxc8RUcfDtERIQUMFlIBtqpK5</ApiKey>
        <Username>rest_service</Username>
    </Header>
    <Body>
    <checkBalance xmlns="http://services/">
        <arg0 xmlns="">${userId}</arg0>
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
    

    res.status(result.status)
    xml2js.parseString(result.data, {explicitArray: false, tagNameProcessors: [xml2js.processors.stripPrefix]},(err, retval) => {
        if (err) {
            res.status(500).end()
        }
        var soapBody = retval.Envelope.Body;
        if (soapBody.$) {
            delete soapBody.$;
        }
        res.json({balance: soapBody.checkBalanceResponse.return});
    });

}

async function connectAccount(req: Request<{}, {}, any>, res: Response){
  const { userId } = req.params as { userId: string}
  const { store_username } = req.body as { store_username: string}
  const wallet = await prisma.connected_account.create({data: {walletId: parseInt(userId), store_username}})
  res.json(wallet);
}

async function deleteUser(req: Request<{}, {}, any>, res: Response){
    const { walletId } = req.params as { walletId: string };
    const wallet = await prisma.user.delete({
        where: {
          userId: parseInt(walletId),
        },
      });
      if (!wallet) {
        throw (`Not found`);
      }
    res.json(wallet);
}

export default {
    createUser,
    checkUser,
    connectAccount,
    verifyUser,
    deleteUser,
    checkBalance
  };
