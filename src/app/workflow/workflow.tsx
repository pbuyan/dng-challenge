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
import { useDnD } from "../../context/dnd-context";

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Workflow() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect: OnConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges],
	);

	const reactFlowWrapper = useRef<HTMLDivElement | null>(null);

	const { screenToFlowPosition } = useReactFlow();

	const [type] = useDnD();

	const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);

	const onDrop = useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();

			if (!type) {
				return;
			}

			if (!reactFlowWrapper.current) {
				console.error("ReactFlow wrapper is not available");
				return;
			}

			const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

			const position = screenToFlowPosition({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});

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
