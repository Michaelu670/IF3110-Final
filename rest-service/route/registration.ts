import { Router } from "express";
import RegistController from "../controller/RegistController";
import auth from "../middleware/auth";

const RegistRouter = Router();

RegistRouter.post("/registration", async function(req, res, next) {
    try {
      res.json(await RegistController.createRegist(req, res));
    } catch (err) {
      console.error(`Error while creating account`, err);
    }
  }  
);

RegistRouter.get("/getRegistration", async function(req, res, next) {
  try {
    const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
    if(!user?.admin){
      throw ("NOT AN ADMIN");
    }
    res.json(await RegistController.getRegist(req, res));
  } catch (err) {
    console.error(`Error while creating wallet`, err);
  }
}  
);

RegistRouter.post("/accept/:registId", async function(req, res, next) {
  try {
    const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
    if(!user?.admin){
      throw ("NOT AN ADMIN");
    }
    res.json(await RegistController.acceptRegist(req, res));
  } catch (err) {
    console.error(`Error while creating wallet`, err);
  }
}  
);

RegistRouter.delete("/reject/:registId", async function(req, res, next) {
    try {
      const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
    if(!user?.admin){
      throw ("NOT AN ADMIN");
    }
      res.json(await RegistController.rejectRegist(req, res));
    } catch (err) {
      console.error(`Error while creating wallet`, err);
    }
  }  
  );

export default RegistRouter;