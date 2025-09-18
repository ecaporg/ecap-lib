import { ITenantGeneric } from "../types";
import { IStudent } from "./student";
import { ITeacherSchoolYearEnrollment } from "./teacher-enrollment";
import { ITenant } from "./tenant";

export interface ISchool extends ITenantGeneric {
  name: string;

  tenant: ITenant;
  tenant_id: number;

  students: IStudent[];
  teacher_school_year_enrollments: ITeacherSchoolYearEnrollment[];
}
