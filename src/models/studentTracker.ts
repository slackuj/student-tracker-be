import { StudentProps } from "../interfaces/studentTracker";

export let students: StudentProps[] = [];

export const setStudents = (updatedStudents: StudentProps[]) => {
    students = updatedStudents;
}