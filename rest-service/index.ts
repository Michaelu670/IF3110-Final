import dotenv from "dotenv";

dotenv.config();

import express, { Express } from "express";
import UserRouter from "./route/user";
import RegistRouter from "./route/registration";
import NotifRouter from "./route/notification";
import HistoryRouter from "./route/history";
import { env } from "process";
import SecretRouter from "./route/secret";
import TransactionRouter from "./route/transaction";



const app: Express = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: [
    process.env.SPA_URL,
    process.env.PHP_URL,
    process.env.SOAP_URL
  ]
}));

app.use("/registration", RegistRouter);
app.use("/transaction", TransactionRouter);
app.use("/notif", NotifRouter);
app.use("/history", HistoryRouter);
app.use("/secret", SecretRouter);
app.use("/transaction", TransactionRouter);
app.use("/", UserRouter);

const port = process.env.REST_PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
