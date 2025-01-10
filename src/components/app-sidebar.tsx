import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({ children }: { children: React.ReactNode }) {
	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent>
				{children}
				<SidebarGroup />
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
