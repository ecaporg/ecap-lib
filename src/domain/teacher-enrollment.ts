import { IGeneric } from "../types";
import { IAcademicYear } from "./academic-year";
import { ISchool } from "./school";
import { ITeacher } from "./staff";
import { IStudentLPEnrollment } from "./student-enrollment";

export interface ITeacherSchoolYearEnrollment extends IGeneric {
  teacher_id: number;

  academic_year: IAcademicYear;
  academic_year_id: number;

  school: ISchool;
  school_id: number;

  student_lp_enrollments: IStudentLPEnrollment[];
  teacher: ITeacher;
}
