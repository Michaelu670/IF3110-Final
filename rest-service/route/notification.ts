import { Router } from "express";
import auth from "../middleware/auth";
import NotifController from "../controller/NotifController";

const NotifRouter = Router();

NotifRouter.post("/create/:userId", async function(req, res, next) {
  try {
    res.json(await NotifController.createNotif(req, res));
  } catch (err) {
    console.error(`Error while creating notification`, err);
  }
}  
);

NotifRouter.get("/get/:userId", async function(req, res, next) {
    try {
    const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
    res.json(await NotifController.getNotif(req, res));
    } catch (err) {
      console.error(`Error while getting notifs`, err);
    }
  }  
);

NotifRouter.delete("/delete/:userId/:notifId", async function(req, res, next) {
  const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
    try {
      res.json(await NotifController.deleteNotif(req, res));
    } catch (err) {
      console.error(`Error while deleting notif`, err);
      next(err);
    }
  }  
);

NotifRouter.delete("/delete/:userId", async function(req, res, next) {
  const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
  try {
    res.json(await NotifController.deleteAllNotif(req, res));
  } catch (err) {
    console.error(`Error while deleting notif`, err);
    next(err);
  }
}  
);

export default NotifRouter;