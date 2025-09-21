import { IIDGeneric } from "../types";
import { ITrack } from "./track";

export interface ISemester extends IIDGeneric {
  start_date: Date;
  end_date: Date;
  name: string;

  track: ITrack;
  track_id: number;
}
