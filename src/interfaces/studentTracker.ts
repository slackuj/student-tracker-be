export type Gender = "Male" | "Female" | "Other";
export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

export interface StudentProps {
    id: string;
    name: string;
    rollNumber: number;
    contactNumber: number;
    grade: Grade;
    gender: Gender;
    imgURL?: string;
    shouldDelete: boolean;
}