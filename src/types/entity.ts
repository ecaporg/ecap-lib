export type EntityId = string | number;

export type EntityKey<T> = EntityId | Partial<T>;

export interface IDatedGeneric {
  updatedAt: Date | string;
  createdAt: Date | string;
}
export interface IGeneric extends IDatedGeneric {
  id: number;
}

export interface ICanvasGeneric extends IGeneric {
  canvas_id?: string;
}

export interface ITenantGeneric extends IGeneric {
  tenant_id: number;
}
