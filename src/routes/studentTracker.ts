import { Router } from "express";
import * as studentTrackerController from '../controllers/studentTracker';
import {
    validateParams,
    validateQueryParams,
    validateRequestBody
} from "../middlewares/validator";
import {
    createStudentSchema,
    deleteByIDSchema,
    fetchALLSchema,
    fetchByIDSchema,
    updateByIDSchema,
    updateStudentSchema
} from "../schemas/studentTracker";

const router = Router();

router.post("/", validateRequestBody(createStudentSchema), studentTrackerController.create);
router.get("/", studentTrackerController.fetchALL);
router.delete("/:id", validateParams(deleteByIDSchema), studentTrackerController.deleteByID);
router.patch("/:id", validateParams(updateByIDSchema), validateRequestBody(updateStudentSchema), studentTrackerController.updateByID);
router.get("/:id", validateParams(fetchByIDSchema), studentTrackerController.fetchByID);

/*router.get("/:id", (req: Request, res: Response) => {
    //res.send(req.params.id);
    res.send('Welcome');
});*/

export default router;