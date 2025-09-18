import { IGeneric } from "../types";
import { IStudentLPEnrollment } from "./student-enrollment";
import { ITrack } from "./track";

export interface ITrackLearningPeriod extends IGeneric {
  start_date: Date;
  end_date: Date;
  name: string;

  track: ITrack;
  track_id: number;

  student_lp_enrollments: IStudentLPEnrollment[];
}
