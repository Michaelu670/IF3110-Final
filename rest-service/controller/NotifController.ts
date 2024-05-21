import { Request, Response } from "express";
import prisma from "../prisma";
import { Notification } from "@prisma/client";

import { Prisma } from "@prisma/client";

async function createNotif(req: Request<{}, {}, any>, res: Response){
  // const { userId } = req.params as { userId: string};
  const { transferAmount, senderId, recieverId, userId } = req.body as { userId: number, transferAmount: number, senderId: number, recieverId: number };

  var info= ""
  if(senderId == 0){
    info = "Top up";
  }

  const notif = await prisma.notification.create({data: { userId: userId, transAmount: transferAmount, senderId, recieverId, info}});
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

  if(!sender || !reciever){
    throw ('Users not found')
  }
  // res.status(200).json({
  //   notifId: notif.notifId,
  //   sender: sender.username,
  //   reciever: reciever.username,
  //   amount: transferAmount,
  //   info: notif.info,
  //   time: notif.time
  // });
  // res.json(notif);
}

async function getNotif(req: Request<{}, {}, any>, res: Response){
    const { userId } = req.params as { userId: string };
    const notif = await prisma.notification.findMany({
        where: {
          userId: parseInt(userId),
        },
      });
      if (!notif) {
        throw (`Notif with id ${userId} is not found`);
      }

      let jsonResp = [{}]
      jsonResp.pop()

      for(let i = 0; i < notif.length; i++){

        var sender = await prisma.user.findUnique({
          where: {
              userId: notif[i].senderId
          }
        })
      
        var reciever = await prisma.user.findUnique({
          where: {
              userId: notif[i].recieverId
          }
        })
      
        if(!sender || !reciever){
          throw ('Users not found')
        }

        jsonResp.push({
          notifId: notif[i].notifId,
          sender: sender.username,
          reciever: reciever.username,
          amount: notif[i].transAmount,
          info: notif[i].info,
          time: notif[i].time
        })
      }

      res.status(200).json(jsonResp);
}

async function deleteNotif(req: Request<{}, {}, any>, res: Response){
    const { userId, notifId } = req.params as { userId: string, notifId: string };

    const notif = await prisma.notification.delete({
        where: {
          notifId_userId: {
            notifId: parseInt(notifId),
            userId: parseInt(userId),
          },
        },
      });
      if (!notif) {
        throw (`Notif with id ${notifId} is not found`);
      }
    res.json(notif);
}

async function deleteAllNotif(req: Request<{}, {}, any>, res: Response){
  const { userId } = req.params as { userId: string };

  const notif = await prisma.notification.deleteMany({
      where: {
        userId: parseInt(userId)
      },
    });
    if (!notif) {
      throw (`User with id ${userId} is not found`);
    }
  res.json(notif);
}

export default {
    createNotif,
    getNotif,
    deleteNotif,
    deleteAllNotif,
  };