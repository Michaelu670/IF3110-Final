import { Request, Response } from "express";
import prisma from "../prisma";
import { History } from "@prisma/client";

import { Prisma } from "@prisma/client";

async function createHistory(req: Request<{}, {}, any>, res: Response){
    // const { userId } = req.params as { userId: string };
    // const { transAmount, senderId, recieverId, status} = req.body as { userId: number, transAmount: number, senderId: number, recieverId: number, status: boolean};
    const { senderId, recieverId, transferAmount, userId, status } = req.body as { status: boolean, userId:number, senderId: number, recieverId:number, transferAmount:number }
    
    var info= ""
    if(senderId == 0){
      info = "Top up";
    }

    const history = await prisma.history.create({data: { userId, transAmount: transferAmount, senderId, recieverId, status, info}});

    const sender = await prisma.user.findUnique({
      where: {
          userId: senderId
      }
    })
  
    const reciever = await prisma.user.findUnique({
      where: {
          userId: recieverId
      }
    })

    if(status){
      var statusString = "Berhasil";
    } else{
      var statusString = "Gagal";
    }
  
    if(!sender || !reciever){
      throw ('Users not found')
    }
    // res.status(200).json({
    //   notifId: history.transId,
    //   sender: sender.username,
    //   reciever: reciever.username,
    //   amount: transferAmount,
    //   status: statusString,
    //   time: history.time
    // });
    // res.json(history);
}

async function getHistory(req: Request<{}, {}, any>, res: Response){
  const { userId } = req.params as { userId: string };
  const history = await prisma.history.findMany({
        where: {
          userId: parseInt(userId),
        },
      });
      if (!history) {
        throw (`History with user id ${userId} is not found`);
      }

  
      let jsonResp = [{}]
      jsonResp.pop()

      for(let i = 0; i < history.length; i++){

        var sender = await prisma.user.findUnique({
          where: {
              userId: history[i].senderId
          }
        })
      
        var reciever = await prisma.user.findUnique({
          where: {
              userId: history[i].recieverId
          }
        })
      
        if(!sender || !reciever){
          throw ('Users not found')
        }

        if(history[i].status){
          var statusString = "Berhasil";
        } else{
          var statusString = "Gagal";
        }

        jsonResp.push({
          notifId: history[i].transId,
          sender: sender.username,
          reciever: reciever.username,
          amount: history[i].transAmount,
          status: statusString,
          info: history[i].info,
          time: history[i].time
        })
      }

      res.status(200).json(jsonResp);
    // res.json(history);
}

export default {
    createHistory,
    getHistory,
  }