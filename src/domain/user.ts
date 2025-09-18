import type { RolesEnum } from "../constants";
import type { IGeneric } from "../types";
import type { IAdmin, IDirector, ITeacher } from "./staff";
import type { IStudent } from "./student";

export interface IUser extends IGeneric {
  name: string;
  email: string;
  password: string;
  emailVerified: boolean;
  isActive: boolean;
  refreshToken?: string;

  canvas_additional_info?: Record<string, any>;

  role?: RolesEnum;

  student?: IStudent;
  teacher?: ITeacher;
  director?: IDirector;
  admin?: IAdmin;
}
