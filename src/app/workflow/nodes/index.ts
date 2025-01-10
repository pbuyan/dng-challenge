import type { Node, NodeTypes, BuiltInNode } from "@xyflow/react";
import { CustomNode } from "./custom-node";

export type CustomNodeType = Node<
	{
		label?: string;
		description?: string;
		tags?: string[];
	},
	"custom-node"
>;

export type AppNode = BuiltInNode | CustomNodeType;

export const initialNodes: AppNode[] = [
	{
		id: "a",
		type: "custom-node",
		position: { x: -400, y: 0 },
		data: {
			label: "Custom node 1",
			description: "Custom node 1 description",
			tags: ["tag 1", "tag 2"],
		},
	},
	{
		id: "b",
		type: "custom-node",
		position: { x: -0, y: 100 },
		data: {
			label: "Custom node 2",
			description: "Custom node 2 description",
			tags: ["tag 3", "tag 4", "tag 5"],
		},
	},
	{
		id: "c",
		type: "custom-node",
		position: { x: 400, y: 0 },
		data: {
			label: "Custom node 3",
			description: "Custom node 3 description",
			tags: ["tag 6", "tag 7", "tag 8", "tag 9"],
		},
	},
];

export const nodeTypes = {
	"custom-node": CustomNode,
} satisfies NodeTypes;
