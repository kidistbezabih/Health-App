import { UserModel } from "../../models/userModel";

export class UserEntity {
  public id: number
  public fullName: string
  public email: string
  public phone: string
  public emailVerified: boolean
	constructor(
    id: number,
    fullName: string,
    email: string,
    phone: string,
    emailVerified: boolean 
	) {
    this.id = id,
    this.fullName = fullName,
    this.email = email,
    this.phone = phone,
    this.emailVerified = emailVerified
	}

	public static fromDatabase(obj: UserModel): UserEntity {
		const {
			id,
			fullName,
			email,
			phone,
			emailVerified
		} = obj;

		return new UserEntity(
			id as number,
			fullName as string,
			email as string,
			phone as string,
			emailVerified as boolean
		);
	}
}
