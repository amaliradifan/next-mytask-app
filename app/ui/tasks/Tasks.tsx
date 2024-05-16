import React from "react";
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";
import { prisma } from "@/utils/prisma";
import { Task } from "@/app/lib/types";

export default async function Tasks() {
	const tasks: Task[] = await prisma.task.findMany();
	return (
		<div className="p-10 border-2 bg-neutral rounded-2xl border-gray-600 w-full h-full overflow-y-auto flex flex-wrap">
			{tasks.map((task) => {
				return <TaskCard key={task.id} task={task} />;
			})}
			<CreateTask />
		</div>
	);
}
