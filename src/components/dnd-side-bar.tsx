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
			<SidebarHeader className="font-semibold mt-8 text-center">
				Available nodes
			</SidebarHeader>
			<hr />
			<SidebarContent>
				<p className="px-2 text-center mt-8 mb-4">
					You can drag these nodes to the pane on the right.
				</p>
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
