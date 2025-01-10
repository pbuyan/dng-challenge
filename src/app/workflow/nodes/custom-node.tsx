import { Handle, Position, type NodeProps } from "@xyflow/react";

import type { CustomNodeType } from "./";

import { FlowCard } from "@/components/flow-card";

export function CustomNode({ data }: NodeProps<CustomNodeType>) {
	return (
		<>
			<div>
				<Handle type="target" position={Position.Left} />
				<FlowCard
					title={data.label}
					description={data.description}
					tags={data.tags}
				/>
				<Handle type="source" position={Position.Right} />
			</div>
		</>
	);
}
