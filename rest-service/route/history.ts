import { Router } from "express";
import auth from "../middleware/auth";
import HistoryController from "../controller/HistoryController";

const HistoryRouter = Router();

HistoryRouter.post("/create/:userId", async function(req, res, next) {
  try {
    res.json(await HistoryController.createHistory(req, res));
  } catch (err) {
    console.error(`Error while creating wallet`, err);
    return;
  }
});

HistoryRouter.get("/get/:userId", async function(req, res, next) {
    try {
    const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
      res.json(await HistoryController.getHistory(req, res));
    } catch (err) {
      console.error(`Error while getting wallet`, err);
    }
  }  
);

export default HistoryRouter;