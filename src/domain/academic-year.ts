import { IGeneric } from "../types";
import type { ITeacherSchoolYearEnrollment } from "./teacher-enrollment";
import type { ITrack } from "./track";

export interface IAcademicYear extends IGeneric {
  from: number;
  to: number;

  teacher_school_year_enrollments: ITeacherSchoolYearEnrollment[];
  tracks: ITrack[];
}
