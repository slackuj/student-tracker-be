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
    { 
	    timestamps: true ,
	    toJSON: {
		    virtuals: true, // ensures 'id' virtual is included
		    versionKey: false, // removes '__v'
		    transform: (_doc, ret: Partial<IStudents>) => {
			    delete ret._id; // removes '_id'
			    return ret;
		    }
	    }

    }
);

studentSchema.post("findOne", function(error: any, doc: any, next: any){

    if(error.name === "CastError" && error.path === '_id'){
        next(new Error(`Student with id ${error.value} not found`));
    } else {
        next();
    }
})

const StudentsModel = mongoose.model<IStudents>("Students", studentSchema);

export default StudentsModel;
