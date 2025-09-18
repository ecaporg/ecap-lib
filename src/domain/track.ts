import { ITenantGeneric } from "../types";
import { IAcademicYear } from "./academic-year";
import { ISemester } from "./semester";
import { ITenant } from "./tenant";
import { ITrackCalendar } from "./track-calendar";
import { ITrackLearningPeriod } from "./track-learning-period";

export interface ITrack extends ITenantGeneric {
  name: string;
  start_date: Date;
  end_date: Date;

  academicYear: IAcademicYear;
  academic_year_id: number;

  tenant: ITenant;
  tenant_id: number;

  learningPeriods: ITrackLearningPeriod[];
  semesters: ISemester[];
  calendar: ITrackCalendar;
}
