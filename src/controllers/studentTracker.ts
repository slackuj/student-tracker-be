import { Request, Response, NextFunction } from 'express';
import * as studentTrackerService from '../services/studentTracker';

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = req.body;
        const response = await studentTrackerService.create(data);
        res.status(201).json({
            data: response
        });
    } catch (error) {
        next(error);
    }
}

export const fetchALL = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await studentTrackerService.fetchALL(req.query);

        res.status(200).json({
            data: response
        });
    } catch (error) {
        next(error);
    }
}

export const deleteByID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.query.id;
        const data = await studentTrackerService.deleteByID(String(id));
        res.status(200).json({
            data
        });
    } catch (error) {
        next(error);
    }
}

export const updateByID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = req.body;
        const response = await studentTrackerService.updateByID(data);
        res.status(201).json({
            data: response
        });
    } catch (error) {
        next(error);
    }
}

export const fetchByID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        const data = await studentTrackerService.fetchByID(String(id));
        res.status(201).json({
            data
        });
    } catch (error) {
        next(error);
    }
}