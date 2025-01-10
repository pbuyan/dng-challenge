"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DnDAside from "@/components/dnd-side-bar";
import { DnDProvider } from "./DnDContext";
import { ReactFlowProvider } from "@xyflow/react";
import Header from "@/components/header";

export default function WorkflowLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<section className="flex flex-col min-h-screen">
				<SidebarProvider>
					<ReactFlowProvider>
						<DnDProvider>
							<DnDAside />
							<main className="w-full">
								<SidebarTrigger />
								{children}
							</main>
						</DnDProvider>
					</ReactFlowProvider>
				</SidebarProvider>
			</section>
		</div>
	);
}
