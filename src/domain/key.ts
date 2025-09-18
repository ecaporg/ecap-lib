import { IDatedGeneric } from "../types";
import { ITenant } from "./tenant";

export interface IKey extends IDatedGeneric {
  id: number;
  url: string;

  access_token: string;
  session_token: string;

  tenant: ITenant;
}
