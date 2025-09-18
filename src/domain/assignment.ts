import { ICanvasGeneric } from "../types";
import { ICourse } from "./course";
import { IStudentLPEnrollmentAssignment } from "./student-enrollment-assignment";

export interface IAssignment extends ICanvasGeneric {
  name: string;
  due_at: Date;
  canvas_id?: string;

  course: ICourse;
  course_id: number;

  enrollmentAssignments: IStudentLPEnrollmentAssignment[];
}
