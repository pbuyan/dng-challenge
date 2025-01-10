"use client";

import { useCallback, useRef } from "react";
import {
	Background,
	Controls,
	MiniMap,
	ReactFlow,
	addEdge,
	useNodesState,
	useEdgesState,
	type OnConnect,
	useReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { type AppNode, initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { useDnD } from "./DnDContext";

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Workflow() {
	// State management for nodes and edges
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	// Callback for when a connection is made between nodes
	const onConnect: OnConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges],
	);

	// Ref for the ReactFlow wrapper
	const reactFlowWrapper = useRef<HTMLDivElement | null>(null);

	// Accessing ReactFlow's internal methods
	const { screenToFlowPosition } = useReactFlow();

	// Drag-and-drop node type from context
	const [type] = useDnD();

	// Handle drag over event
	const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);

	// Handle drop event for adding nodes
	const onDrop = useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();

			if (!type) {
				return;
			}

			// Ensure reactFlowWrapper is available
			if (!reactFlowWrapper.current) {
				console.error("ReactFlow wrapper is not available");
				return;
			}

			const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

			// Calculate flow position from screen position
			const position = screenToFlowPosition({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});

			// Create a new node
			const newNode: AppNode = {
				id: getId(),
				type: type as "custom-node",
				position,
				data: { label: `${type} node` },
			};

			setNodes((nds) => [...nds, newNode]);
		},
		[screenToFlowPosition, type, setNodes],
	);

	return (
		<div className="w-full h-[90vh]" ref={reactFlowWrapper}>
			<ReactFlow
				nodes={nodes}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				edges={edges}
				edgeTypes={edgeTypes}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onDrop={onDrop}
				onDragOver={onDragOver}
				fitView
			>
				<Background />
				<MiniMap />
				<Controls />
			</ReactFlow>
		</div>
	);
}
