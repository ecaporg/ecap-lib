import { IIDGeneric } from "../types";
import { IStudent } from "./student";
import { IStudentLPEnrollmentAssignment } from "./student-enrollment-assignment";
import { ITeacherEnrollment } from "./teacher-enrollment";
import { ITrackLearningPeriod } from "./track-learning-period";

export interface IStudentLPEnrollment extends IIDGeneric {
  completed: boolean;
  percentage: number;
  student_grade: string;

  student_id: number;
  student: IStudent;

  teacher_enrollments: ITeacherEnrollment[];

  learning_period: ITrackLearningPeriod;
  learning_period_id: number;

  assignments: IStudentLPEnrollmentAssignment[];
}
