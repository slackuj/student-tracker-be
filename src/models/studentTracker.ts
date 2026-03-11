import {Gender, Grade, StudentProps} from "../interfaces/studentTracker";
import mongoose, { Document, Schema } from "mongoose";

export interface IStudents extends Omit<StudentProps, 'id'>, Document {}

const GenderValues: Gender[] = ["Male", "Female", "Other"];
const GradeValues: Grade[] = ['A', 'B', 'C', 'D', 'F'];

const studentSchema = new Schema<IStudents>({
    name: { type: String, required: true },
    rollNumber: { type: Number, required: true },
    contactNumber: { type: Number },
    gender: { type: String, enum: GenderValues, required: true },
    grade: { type: String, enum: GradeValues, required: true },
    imgURL: { type: String, default: "" },
    shouldDelete: { type: Boolean, default: false }
},
    { timestamps: true }
);

const StudentsModel = mongoose.model<IStudents>("Students", studentSchema);

export default StudentsModel;