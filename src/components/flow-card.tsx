import { EllipsisVertical } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface FlowCardProps extends React.ComponentProps<typeof Card> {
	description?: string;
	tags?: string[];
}

export function FlowCard({
	title,
	description,
	tags,
	className,
	...props
}: FlowCardProps) {
	const handleClick = () => {
		toast(`"${title}" clicked`, {
			position: "top-right",
		});
	};
	return (
		<Card className={cn("w-[317px]", className)} {...props}>
			<CardHeader>
				<CardTitle className="flex w-full justify-between">
					<div>{title}</div>
					<div>
						{" "}
						<EllipsisVertical />
					</div>
				</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="flex gap-2">
					{tags?.map((tag) => (
						<div key={tag}>
							<Badge variant="secondary">{tag}</Badge>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full" variant="outline" onClick={handleClick}>
					Click
				</Button>
			</CardFooter>
		</Card>
	);
}
