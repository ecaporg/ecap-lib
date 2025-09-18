import { IGeneric } from "../types";
import { ITrack } from "./track";

export interface ISemester extends IGeneric {
  start_date: Date;
  end_date: Date;
  name: string;

  track: ITrack;
  track_id: number;
}
