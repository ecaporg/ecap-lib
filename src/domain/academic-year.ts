import { IIDGeneric } from "../types";
import type { ITeacherEnrollment } from "./teacher-enrollment";
import type { ITrack } from "./track";

export interface IAcademicYear extends IIDGeneric {
  from: number;
  to: number;

  teacher_enrollments: ITeacherEnrollment[];
  tracks: ITrack[];
}
