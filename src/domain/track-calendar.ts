import { IIDGeneric } from "../types";
import { ITrack } from "./track";

export interface ICalendarDay {
  day: Date | string;
  type: string;
}

export interface ITrackCalendar extends IIDGeneric {
  id: number;
  days: ICalendarDay[];
  track: ITrack;
}
