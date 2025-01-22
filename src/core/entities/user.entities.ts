import { UserModel } from "../../models/userModel";

export class UserEntity {
  public id: number
  public fullName: string
  public email: string
  public phone: string
  public status: boolean = false
	constructor(
    id: number,
    fullName: string,
    email: string,
    phone: string,
    status: boolean = false    
	) {
    this.id = id,
    this.fullName = fullName,
    this.email = email,
    this.phone = phone,
    this.status = status = false
	}

	public static fromDatabase(obj: UserModel): UserEntity {
		const {
			id,
			fullName,
			email,
			phone,
			status
		} = obj;

		return new UserEntity(
			id as number,
			fullName as string,
			email as string,
			phone as string,
			status as boolean
		);
	}
}
