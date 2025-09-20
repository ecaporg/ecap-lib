import { IGeneric } from "../types";
import { IAcademicYear } from "./academic-year";
import { ITeacher } from "./staff";
import { IStudentLPEnrollment } from "./student-enrollment";

export interface ITeacherEnrollment extends IGeneric {
  teacher_id: number;

  academic_year: IAcademicYear;
  academic_year_id: number;

  student_lp_enrollments: IStudentLPEnrollment[];
  teacher: ITeacher;
}
