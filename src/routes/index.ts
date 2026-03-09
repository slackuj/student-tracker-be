import { Router } from "express";
import studentTrackerRoutes from "./studentTracker";

const router = Router();

router.use("/studentTracker", studentTrackerRoutes);

export default router;