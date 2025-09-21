import { IIDGeneric } from "../types";
import { IAcademy } from "./academy";
import { ISchool } from "./school";
import { IStudentLPEnrollment } from "./student-enrollment";
import { IUser } from "./user";

export interface IStudent extends IIDGeneric {
  id: number;
  user: IUser;

  academy_id: number;
  academy: IAcademy;

  school_id: number;
  school: ISchool;

  student_lp_enrollments: IStudentLPEnrollment[];
}
