import { IDatedGeneric } from "../types";
import { ITrack } from "./track";

export interface CalendarDay {
  day: Date;
  type: string;
}

export interface ITrackCalendar extends IDatedGeneric {
  id: number;
  days: CalendarDay[];
  track: ITrack;
}
