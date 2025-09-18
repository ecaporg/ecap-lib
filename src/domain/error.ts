import { ITenantGeneric } from "../types";
import { ITenant } from "./tenant";

export interface IError extends ITenantGeneric {
  message: string;

  tenant: ITenant;
  tenant_id: number;
}
