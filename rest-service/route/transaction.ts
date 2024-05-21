import { Router } from "express";
import auth from "../middleware/auth";
import TransactionController from "../controller/TransactionController";

const TransactionRouter = Router();

TransactionRouter.post('/topup/:userId', async function (req, res, next) {
    try {
        await TransactionController.topup(req, res);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

TransactionRouter.post("/transfer", async function(req, res, next) {
    try {
      res.json(await TransactionController.transfer(req, res));
    } catch (err) {
      console.error(`Error while creating wallet`, err);
    }
  }  
);

// TransactionRouter.get("/get/:userId", async function(req, res, next) {
//     try {
//     const user = JSON.parse(JSON.stringify(await auth.authenticate(req)));
//       res.json(await TransactionController.getHistory(req, res));
//     } catch (err) {
//       console.error(`Error while getting wallet`, err);
//     }
//   }  
// );



export default TransactionRouter;