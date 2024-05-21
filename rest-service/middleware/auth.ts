// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken');
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../prisma";
const secret = 'kapanselesainubes'

const createToken = (id: any) => {
    console.log("INI SIH" + id);
    return jwt.sign({id}, secret, { expiresIn: "1h"});
}

const verifyToken = (token: any) => {
    // console.log("INI" + jwt.verify(token, secret))
    return jwt.verify(token, secret);
}

async function authenticate (req: Request) {
        const { authorization } = req.headers
        if(!authorization){
          return;
        }
        var token = authorization.split(' ')[1];
        const stringtoken = token.toString();

        let data

        if (!stringtoken) {
          throw new Error ("No tokens detected")
            // return ({isAuth: false})
        //   return;
        }

        try {
          const decoded = JSON.parse(JSON.stringify(verifyToken(stringtoken)))
          console.log(JSON.parse(JSON.stringify(decoded)))
      
          if (!decoded) {
            throw ("AUth failed");
            // return ({isAuth: false})
          }

          data = decoded;


        } catch (error) {
            console.log(error)
            // return ({isAuth: false})
          throw ("Session Expired");
        }
  
      if (!authorization) {
        throw ("Auth failed");
        return;
      }
  
      const user = await prisma.user.findUnique({
        where: {
          username: data.id,
        },
      });

      if(!user){
        throw ("User not found");
        return;

      }

      return user;
}

export default {
    createToken,
    verifyToken,
    authenticate
}