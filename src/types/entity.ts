export type EntityId = string | number;

export type EntityKey<T> = EntityId | Partial<T>;

export interface IIDGeneric<T = number> {
  id: T;
}

export interface IDatedGeneric {
  updatedAt: Date | string;
  createdAt: Date | string;
}

export interface IGeneric extends IDatedGeneric, IIDGeneric {}

export interface IIDCanvasGeneric extends IIDGeneric {
  canvas_id?: string;
}

export interface ICanvasGeneric extends IGeneric {
  canvas_id?: string;
}

export interface ITenantGeneric extends IIDGeneric {
  tenant_id: number;
}
