import { Router } from "express";
import UserController from "../controller/UserController";
import RegistController from "../controller/RegistController";
import auth from "../middleware/auth";

const UserRouter = Router();


UserRouter.post("/register", async function(req, res, next) {
  try {
    res.json(await RegistController.createRegist(req, res));
  } catch (err) {
    console.error(`Error while creating account`, err);
  }
}  
);

UserRouter.post("/login", async function(req, res, next) {
  try {
    res.json(await UserController.verifyUser(req, res));
  } catch (err) {
    console.error(`Error while creating wallet`, err);
  }
}  
);

UserRouter.post("/check", async function(req, res, next) {
  try {
    res.json(await UserController.checkUser(req, res));
  } catch (err) {
    console.error(`Error while checking account`, err);
  }
}  
);

UserRouter.get("/balance", async function (req, res, next) {
  try {
    res.json(await UserController.checkBalance(req, res));
  } catch (err) {
    console.error('Error while checking balance', err)
  } 
})

UserRouter.post("/connect/:userId", async function(req, res, next) {
  try {
    const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
    res.json(await UserController.connectAccount(req, res));
  } catch (err) {
    console.error(`Error while creating wallet`, err);
  }
}  
);

UserRouter.delete("/delete/:walletId", async function(req, res, next) {
    try {
    const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
      res.json(await UserController.deleteUser(req, res));
    } catch (err) {
      console.error(`Error while deleting wallet`, err);
      next(err);
    }
  }  
);

export default UserRouter;
