import { UserModel } from "../models/userModel";


function getSafeUser(user : UserModel) {
  return {
      id: user.id,
      email: user.email,
      // roles: user.roles.map((role: any) => role.role)
  };
}

export { getSafeUser };