import { IGeneric } from "../types";
import { IStudent } from "./student";
import { IStudentLPEnrollmentAssignment } from "./student-enrollment-assignment";
import { ITeacherSchoolYearEnrollment } from "./teacher-enrollment";
import { ITrackLearningPeriod } from "./track-learning-period";

export interface IStudentLPEnrollment extends IGeneric {
  completed: boolean;
  percentage: number;
  student_grade: string;

  student_id: number;
  student: IStudent;

  teacher_school_year_enrollments: ITeacherSchoolYearEnrollment[];

  learning_period: ITrackLearningPeriod;
  learning_period_id: number;

  assignments: IStudentLPEnrollmentAssignment[];
}
