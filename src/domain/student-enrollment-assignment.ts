import { IIDGeneric } from "../types";
import { IAssignment } from "./assignment";
import { ISample } from "./sample";
import { IStudentLPEnrollment } from "./student-enrollment";

export interface IStudentLPEnrollmentAssignment extends IIDGeneric<string> {
  id: string;

  assignment: IAssignment;
  assignment_id: number;

  sample: ISample;
  sample_id?: number;

  student_lp_enrollment: IStudentLPEnrollment;
  student_lp_enrollment_id: number;
}
