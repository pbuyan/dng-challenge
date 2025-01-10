// import Nav from "@/components/nav/nav";

import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className="border-b border-border bg-background">
			<div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-end items-center">
				<Button asChild variant="link">
					<Link href="/" className="flex items-center">
						Home
					</Link>
				</Button>
				<Button asChild variant="link">
					<Link href="/sign-up" className="flex items-center">
						Sign Up
					</Link>
				</Button>
			</div>
		</header>
	);
}
