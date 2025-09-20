import { ITenantGeneric } from "../types";
import { IStudent } from "./student";
import { ITenant } from "./tenant";

export interface ISchool extends ITenantGeneric {
  name: string;

  tenant: ITenant;
  tenant_id: number;

  students: IStudent[];
}
