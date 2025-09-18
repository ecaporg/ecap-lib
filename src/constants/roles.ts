export enum RolesEnum {
  ADMIN = "ADMIN",
  DIRECTOR = "DIRECTOR",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export const ROLES = [
  RolesEnum.TEACHER,
  RolesEnum.DIRECTOR,
  RolesEnum.ADMIN,
  RolesEnum.SUPER_ADMIN,
  RolesEnum.STUDENT,
] as const;

export const MAP_TO_STRING: Record<(typeof ROLES)[number], string> = {
  TEACHER: "Teacher",
  DIRECTOR: "Director",
  ADMIN: "Admin",
  SUPER_ADMIN: "Super Admin",
  STUDENT: "Student",
};
