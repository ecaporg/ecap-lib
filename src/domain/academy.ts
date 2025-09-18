import { ITenantGeneric } from "../types";
import { IDirector } from "./staff";
import { ITenant } from "./tenant";

export interface IAcademy extends ITenantGeneric {
  name: string;

  tenant: ITenant;
  tenant_id: number;

  directors: IDirector[];
}
