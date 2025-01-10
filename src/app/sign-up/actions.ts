"use server";

interface UserData {
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

export async function signUp(userData: UserData) {
	console.log("userData: ", userData);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return { success: true };
}
