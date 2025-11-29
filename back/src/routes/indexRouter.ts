import { Router } from "express";
import userRouter from "./userRouter";
import appointmentRouter from "./appointmentRouter";


const indexRouter: Router = Router();

indexRouter .use("/user", userRouter)
indexRouter .use("/appointments", appointmentRouter);


export default indexRouter;