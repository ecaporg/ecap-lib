import { IIDCanvasGeneric } from "../types";
import { IAssignment } from "./assignment";

export interface ICourse extends IIDCanvasGeneric {
  canvas_id?: string;

  name: string;

  assignments: IAssignment[];
}
