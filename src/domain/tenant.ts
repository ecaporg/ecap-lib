import { IIDGeneric } from "../types";
import { IAcademy } from "./academy";
import { ICourse } from "./course";
import { IKey } from "./key";
import { ISchool } from "./school";
import { IAdmin, IDirector, ITeacher } from "./staff";
import { ITrack } from "./track";

export interface ITenant extends IIDGeneric {
  name: string;

  key: IKey;

  schools: ISchool[];
  academies: IAcademy[];
  tracks: ITrack[];

  admins: IAdmin[];
  directors: IDirector[];
  teachers: ITeacher[];
  courses: ICourse[];
}
