import { Router } from "express";
import * as studentTrackerController from '../controllers/studentTracker';
import {
    validateParams,
    validateQueryParams,
    validateRequestBody
} from "../models/validator";
import {
    createStudentSchema,
    deleteByIDSchema,
    fetchALLSchema,
    fetchByIDSchema,
    updateStudentSchema
} from "../schemas/studentTracker";

const router = Router();

router.post("/", validateRequestBody(createStudentSchema), studentTrackerController.create);
router.get("/", validateQueryParams(fetchALLSchema), studentTrackerController.fetchALL);
router.delete("/", validateQueryParams(deleteByIDSchema), studentTrackerController.deleteByID);
router.put("/", validateRequestBody(updateStudentSchema), studentTrackerController.updateByID);
router.get("/:id", validateParams(fetchByIDSchema), studentTrackerController.fetchByID);

/*router.get("/:id", (req: Request, res: Response) => {
    //res.send(req.params.id);
    res.send('Welcome');
});*/

export default router;