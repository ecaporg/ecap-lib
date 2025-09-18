import { SampleFlagCategory, SampleStatus } from "../constants";
import { ICanvasGeneric } from "../types";
import {
  ISampleFlagCompleted,
  ISampleFlagError,
  ISampleFlagMissingWork,
  ISampleFlagRejected,
} from "./sample-flag";
import { IStudentLPEnrollmentAssignment } from "./student-enrollment-assignment";
import { IUser } from "./user";

export interface ISample extends ICanvasGeneric {
  canvas_id?: string;
  date?: Date;
  status: SampleStatus;
  grade?: string;
  preview_url?: string;

  done_by: IUser;
  done_by_id: number;

  flag_category: SampleFlagCategory;
  flag_completed: ISampleFlagCompleted;
  flag_errors: ISampleFlagError;
  flag_missing_work: ISampleFlagMissingWork;
  flag_rejected: ISampleFlagRejected;

  student_lp_enrollment_assignment: IStudentLPEnrollmentAssignment;
}
