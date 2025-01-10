"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import DnDAside from "./DnDSideBar";
import { DnDProvider, useDnD } from "./DnDContext";
import {
	ReactFlow,
	ReactFlowProvider,
	addEdge,
	useNodesState,
	useEdgesState,
	Controls,
	useReactFlow,
	Background,
} from "@xyflow/react";
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
						<AppSidebar>
							<DnDAside />
						</AppSidebar>
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
