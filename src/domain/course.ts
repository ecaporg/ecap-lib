import { ICanvasGeneric } from "../types";
import { IAssignment } from "./assignment";

export interface ICourse extends ICanvasGeneric {
  canvas_id?: string;

  name: string;

  assignments: IAssignment[];
}
