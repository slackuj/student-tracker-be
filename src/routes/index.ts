import { Router } from "express";
import studentTrackerRoutes from "./studentTracker";

const router = Router();

router.use("/students", studentTrackerRoutes);

export default router;