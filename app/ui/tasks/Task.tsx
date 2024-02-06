import React from "react";
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";

export default function Tasks() {
	return (
		<div className="p-8 border-2 bg-neutral rounded-2xl border-gray-600 h-full overflow-y-auto flex">
			<TaskCard />
			<CreateTask />
		</div>
	);
}
