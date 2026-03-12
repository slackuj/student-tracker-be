import {StudentProps} from '../interfaces/studentTracker';
import StudentsModel from '../models/studentTracker';

export const create = async (data: Omit<StudentProps, 'id' | 'shouldDelete'>) => {
    return await StudentsModel.create(data);
}

export const fetchALL = async (req: any) => {
    const { grade, gender } = req;
    if (grade && gender){
        return await StudentsModel.find({ gender: gender, grade: grade}).exec();
    }
    if (grade) {
        return await StudentsModel.find({ grade: grade}).exec();
    }
    if (gender){
        return await StudentsModel.find({ gender: gender }).exec();
    }
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
    return 'deleted student successfully.';
}

type studentUpdateData = Pick<StudentProps, 'id'> & Partial<Omit<StudentProps, 'id'>>;
export const updateByID = async (data: studentUpdateData) => {
    /*const student = StudentsModel.findById(data.id).exec();
    if (!student) {
        return 'student not found';
    }*/

    let updates = {};

    // handle updates
    data.name && (
        updates = { ...updates, name : data.name }
    );

    data.rollNumber && (
        updates = { ...updates, rollNumber : data.rollNumber }
    );

    data.contactNumber && (
        updates = { ...updates, contactNumber : data.contactNumber }
    );

    data.grade && (
        updates = { ...updates, grade : data.grade }
    );

    data.gender && (
        updates = { ...updates, gender : data.gender }
    );

    data.imgURL && (
        updates = { ...updates, imgURL : data.imgURL }
    );

    //console.log('id', data.id);
    //console.log(updates);
    await StudentsModel.findByIdAndUpdate(
        data.id,
        updates
    ).exec();

    return "student successfully updated.";
}

export const fetchByID = async (id: string) => {
    const student = await StudentsModel.findById(id).exec();
    if (!student) {
        return 'student not found';
    }

    return student;
}