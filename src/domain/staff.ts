import { IDatedGeneric } from "../types";
import { IAcademy } from "./academy";
import { ITeacherSchoolYearEnrollment } from "./teacher-enrollment";
import { ITenant } from "./tenant";
import { IUser } from "./user";

export interface IStaff extends IDatedGeneric {
  id: number;
  user: IUser;
}

export interface ITeacher extends IStaff {
  teacher_school_year_enrollments: ITeacherSchoolYearEnrollment[];
}

export interface IAdmin extends IStaff {
  tenant: ITenant;
  tenant_id: number;
}

export interface IDirector extends IAdmin {
  academy: IAcademy;
  academy_id: number;
}
