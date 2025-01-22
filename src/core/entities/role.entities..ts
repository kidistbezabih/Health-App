import { RoleModel } from "../../models/roleModel";

export class RoleEntity {
  public id: number;
  public name: string;
  public description: string;

  constructor(
    id: number,
    name: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public static fromDatabase(obj: RoleModel): RoleEntity {
    const {
      id,
      name,
      description
    } = obj;

    return new RoleEntity(
      id as number,
      name as string,
      description as string,
    );
  }
}
