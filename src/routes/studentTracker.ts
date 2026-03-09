import { Router } from "express";
import * as studentTrackerController from '../controllers/studentTracker';

const router = Router();

//router.get("/", validateQueryParams(fetchAll), budgetTrackerController.fetchAll)

//router.post("/", validateRequestBody(createBudgetItemSchema), budgetTrackerController.create);
router.post("/", studentTrackerController.create);
router.get("/", studentTrackerController.fetchALL);
router.delete("/", studentTrackerController.deleteByID);

/*router.get("/:id", (req: Request, res: Response) => {
    //res.send(req.params.id);
    res.send('Welcome');
});*/

export default router;