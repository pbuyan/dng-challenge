"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DnDAside from "./DnDSideBar";
import { DnDProvider } from "./DnDContext";
import { ReactFlowProvider } from "@xyflow/react";
import Header from "@/components/header";

export default function WorkflowLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<section className="flex flex-col min-h-screen">
			<Header />
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
	);
}
