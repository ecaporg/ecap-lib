import { IGeneric } from "../types";
import { IAcademy } from "./academy";
import { ICourse } from "./course";
import { IError } from "./error";
import { IKey } from "./key";
import { ISchool } from "./school";
import { IAdmin, IDirector } from "./staff";
import { ITrack } from "./track";

export interface ITenant extends IGeneric {
  name: string;

  key: IKey;
  errors: IError[];

  schools: ISchool[];
  academies: IAcademy[];
  tracks: ITrack[];

  admins: IAdmin[];
  directors: IDirector[];
  courses: ICourse[];
}
