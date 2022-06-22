export type ApiResponse = Record<string, any>;
export interface IStudentRaw extends ApiResponse {
	id: number;
	name: string;
	marks: string;
	subject: number;
    grade: string;
    date: string;
}

export const StudentActionTypes = {
	ADD_DATA: "@@post/ADD_DATA",
	FETCH_STUDENT_SUCCESS: "@@post/FETCH_STUDENT_SUCCESS",
	FETCH_STUDENT_ERROR: "@@post/FETCHSTUDENT_ERROR"
};
