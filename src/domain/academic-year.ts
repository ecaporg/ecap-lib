import { IGeneric } from "../types";
import type { ITeacherEnrollment } from "./teacher-enrollment";
import type { ITrack } from "./track";

export interface IAcademicYear extends IGeneric {
  from: number;
  to: number;

  teacher_enrollments: ITeacherEnrollment[];
  tracks: ITrack[];
}
