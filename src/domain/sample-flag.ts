import { IDatedGeneric } from "../types";
import { ISample } from "./sample";
import { IUser } from "./user";

export interface ISampleFlag extends IDatedGeneric {
  id: number;
  sample: ISample;
  user: IUser;
  user_id: number;
}

export interface ISampleFlagError extends ISampleFlag {
  comment: string;
}

export interface ISampleFlagMissingWork extends ISampleFlag {
  reason: string;
}

export interface ISampleFlagCompleted extends ISampleFlag {
  message: string;
}

export interface ISampleFlagRejected extends ISampleFlag {
  reason: string;
}
