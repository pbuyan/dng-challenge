import { useDnD } from "../context/dnd-context";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

export default function DnDAside() {
	const [, setType] = useDnD();

	const onDragStart = (
		event: React.DragEvent<HTMLDivElement>,
		nodeType: string,
	) => {
		setType(nodeType);
		event.dataTransfer.effectAllowed = "move";
	};

	return (
		<Sidebar>
			<SidebarHeader className="font-semibold mt-8 mb-5">
				Available nodes
				<hr />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup className="gap-2">
					<div
						className="border py-2 px-4 bg-white"
						onDragStart={(event) => onDragStart(event, "custom-node")}
						draggable
					>
						Custom node
					</div>
					<div
						className="border py-2 px-4 bg-white"
						onDragStart={(event) => onDragStart(event, "custom-node")}
						draggable
					>
						Custom node
					</div>
					<div
						className="border py-2 px-4 bg-white"
						onDragStart={(event) => onDragStart(event, "custom-node")}
						draggable
					>
						Custom node
					</div>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
