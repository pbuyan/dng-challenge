import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	inputSize?: "sm" | "default" | "lg";
	error?: string;
	helper?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type = "text",
			inputSize = "default",
			helper,
			error,
			...props
		},
		ref,
	) => {
		const sizeClasses = {
			sm: "h-8 py-2 text-xs",
			default: "h-[40px] py-[10px] text-[15px]",
			lg: "h-[136px] py-[10px] text-[15px]",
		};

		return (
			<div className="flex flex-col space-y-1">
				<input
					type={type}
					className={cn(
						"flex px-3 w-full rounded-md border border-input bg-background focus:drop-shadow-[0px_0px_4px_rgba(147,197,253,1)] placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed",
						sizeClasses[inputSize],
						{ "border-[#FF3B3B] hover:border-[#ad2624]": error !== undefined },
						className,
					)}
					ref={ref}
					{...props}
				/>
				{helper && <p className="text-xs text-foreground-muted">{helper}</p>}
				{error && <p className="text-xs text-[#FF3B3B]">{error}</p>}
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
