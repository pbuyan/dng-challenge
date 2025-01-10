import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus:border-2 focus:border-[#93C5FD]",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:shadow-[0px_0px_18px_15px_rgba(0,0,0,0.15)_inset] disabled:bg-[#BFDBFE]",
				outline:
					"border border-input text-[#4A4A4A] bg-background hover:bg-[#D2D5DA] disabled:text-[rgba(0,0,0,0.3)]",
				link: "text-primary underline-offset-4 hover:bg-[#DBEAFE] disabled:text-[#BBBBBB]",
			},
			size: {
				default: "py-[10px] px-5 text-sm",
				xs: "py-2 px-3 text-xs",
				sm: "py-2 px-3 text-sm",
				lg: "py-3 px-5 text-base",
				xl: "py-[14px] px-6",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
