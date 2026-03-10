import { z } from "zod";

export const createStudentSchema = z.object({

    name: z.string().min(5),
    rollNumber: z.number().min(1),
    contactNumber: z.number().min(9000000000).max(9999999999),
    grade: z.enum(['A', 'B', 'C', 'D', 'F']),
    gender: z.enum(["Male", "Female", "Other"]),
    imgURL: z.string().min(10).optional()
});

export const fetchALLSchema = z.object({

    gender: z.enum(["Male", "Female", "Other"]).optional(),
    grade: z.enum(['A', 'B', 'C', 'D', 'F']).optional()
});

export const deleteByIDSchema = z.object({

    id: z.string()
});

export const updateStudentSchema = createStudentSchema.partial();
export const fetchByIDSchema = deleteByIDSchema;