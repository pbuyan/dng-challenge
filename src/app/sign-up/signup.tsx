"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "./actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type UserAccountFormInputs = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	passwordConfirmation: string;
};

const userAccountSchema = z
	.object({
		firstName: z.string(),
		lastName: z.string(),
		email: z
			.string()
			.email("Invalid email format")
			.nonempty("Email is required"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.nonempty("Password is required"),
		passwordConfirmation: z
			.string()
			.nonempty("Password Confirmation is required"),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: "Passwords must match",
		path: ["passwordConfirmation"],
	});

export function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserAccountFormInputs>({
		resolver: zodResolver(userAccountSchema),
	});

	const onSubmit: SubmitHandler<UserAccountFormInputs> = async (data) => {
		// Simulate user registration with a server action
		const result = await signUp(data);

		if (result.success) {
			toast.success("Account created", {
				position: "bottom-left",
			});
			return;
		}

		toast.error("Something went wrong", {
			position: "bottom-left",
		});
	};

	return (
		<div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
					Create your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="firstName">First Name</Label>
						<Input
							id="firstName"
							type="text"
							{...register("firstName")}
							error={errors.firstName?.message}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="lastName">Last Name</Label>
						<Input
							id="lastName"
							type="text"
							{...register("lastName")}
							error={errors.lastName?.message}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							{...register("email")}
							error={errors.email?.message}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							{...register("password")}
							error={errors.password?.message}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="passwordConfirmation">Confirm Password</Label>
						<Input
							id="passwordConfirmation"
							type="password"
							{...register("passwordConfirmation")}
							error={errors.passwordConfirmation?.message}
						/>
					</div>

					<Button type="submit" size="lg" variant="default" className="w-full">
						Create Account
					</Button>
				</form>
			</div>
		</div>
	);
}
