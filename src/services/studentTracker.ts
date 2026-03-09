import { StudentProps } from '../interfaces/studentTracker';
import {setStudents, students} from '../models/studentTracker';

export const create = async (data: Omit<StudentProps, 'id' | 'shouldDelete'>) => {
    const newStudent: StudentProps = {
        id: crypto.randomUUID(),
        name: data.name,
        rollNumber: data.rollNumber,
        contactNumber: data.contactNumber,
        grade: data.grade,
        gender: data.gender,
        imgURL: data.imgURL ?? '',
        shouldDelete: false
    }

    students.push(newStudent);
    console.log('added new student', newStudent);
    return newStudent;
}

export const fetchALL = async (req: any) => {
    const { grade, gender } = req;
    if (grade && gender){
        return students.filter(student =>
        student.gender === gender && student.grade === grade);
    }
    if (grade) {
        return students.filter(student => student.grade === grade);
    }
    if (gender){
        return students.filter(student => student.gender === gender);
    }
    return students;
}

export const deleteByID = async (id: string) => {
    const student = students.find(student => student.id === id);
    if (!student) {
        return 'student not found';
    }
    student.shouldDelete = true;
    // handle deletion
    const updatedStudents = students.filter(student => !student.shouldDelete);
    setStudents(updatedStudents);
    console.log('deleted student successfully');
    return 'deleted student successfully.';
}