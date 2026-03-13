import {StudentProps} from '../interfaces/studentTracker';
import StudentsModel from '../models/studentTracker';

export const create = async (data: Omit<StudentProps, 'id' | 'shouldDelete'>) => {
    return await StudentsModel.create(data);
}

export const fetchALL = async () => {
    /*const { grade, gender } = req;
    if (grade && gender){
        return await StudentsModel.find({ gender: gender, grade: grade}).exec();
    }
    if (grade) {
        return await StudentsModel.find({ grade: grade}).exec();
    }
    if (gender){
        return await StudentsModel.find({ gender: gender }).exec();
    }*/
    // assuming soft delete exists
    return await StudentsModel.find({shouldDelete: false}).exec();
}

export const deleteByID = async (id: string) => {
    // soft deletion
    await StudentsModel.findByIdAndUpdate(
        id,
        { shouldDelete: true }
    ).exec();

    // performing hard deletion
    // also consider handling shouldDelete ??? HOW?
    await StudentsModel.findByIdAndDelete(id).exec();
    // return status code only !!!
    //return [];
}

type studentUpdateData = Partial<Omit<StudentProps, 'id'>>;
export const updateByID = async (id: string, data: studentUpdateData) => {

    return await StudentsModel.findByIdAndUpdate(
        id,
        data,
        {
            returnDocument: "after"
        }
    ).exec();
}

export const fetchByID = async (id: string) => {
    const student = await StudentsModel.findById(id).exec();
    if (!student) {
        return 'student not found';
    }

    return student;
}