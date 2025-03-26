import { TEN } from '../constants';

import * as bcrypt from 'bcryptjs'

/**
 * Basic encryption adapter for password hashing and comparison.
 * Here you can use any encryption library you want.
 */
export class CustomHash {
	/**
	 * Generates a hash for a password with a salt.
	 * @param password - The password to hash.
	 * @returns - The hashed password.
	 */
	static hashPassword = async (password: string): Promise<string> => {
		// Create the hash using the salt and the password
		return await bcrypt.hash(password, TEN);
	};

	/**
	 * Compares a password with a given hash and salt.
	 * @param password - The password to verify.
	 * @param hash - The original hash to compare with.
	 * @returns - True if the password matches, false otherwise.
	 */
	static comparePassword = async (password: string, hash: string): Promise<boolean> => {

		return await bcrypt.compare(password, hash);
	};
};
