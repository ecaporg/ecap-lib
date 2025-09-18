import { IDatedGeneric } from "../types";
import { ITrack } from "./track";

export interface ICalendarDay {
  day: Date | string;
  type: string;
}

export interface ITrackCalendar extends IDatedGeneric {
  id: number;
  days: ICalendarDay[];
  track: ITrack;
}
