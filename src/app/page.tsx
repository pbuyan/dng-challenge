import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="font-semibold text-2xl">
					Hi! This is Piotr&#39;s Draft & Goal React Technical Test
				</h1>
				<p className="text-center w-full">Please follow links below</p>

				<div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center">
					<Button asChild variant="link">
						<Link href="/workflow">Workflow</Link>
					</Button>
					<Button asChild variant="link">
						<Link href="/sign-up">Sign Up</Link>
					</Button>
				</div>
			</main>
		</div>
	);
}
