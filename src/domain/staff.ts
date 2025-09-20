import { IDatedGeneric } from "../types";
import { IAcademy } from "./academy";
import { ITeacherEnrollment } from "./teacher-enrollment";
import { ITenant } from "./tenant";
import { IUser } from "./user";

export interface IStaff extends IDatedGeneric {
  id: number;
  user: IUser;
}

export interface ITeacher extends IStaff {
  teacher_enrollments: ITeacherEnrollment[];

  tenant: ITenant;
  tenant_id: number;
}

export interface IAdmin extends IStaff {
  tenant: ITenant;
  tenant_id: number;
}

export interface IDirector extends IAdmin {
  academy: IAcademy;
  academy_id: number;

  tenant: ITenant;
  tenant_id: number;
}
