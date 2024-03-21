import { Task } from "@/app/lib/types";
import React from "react";

export default function TaskDetail({ task }: { task: Task }) {
	return (
		<dialog id={task.id} className="modal">
			<div className="modal-box h-1/2 flex flex-col content-center">
				<form method="dialog">
					<button
						id="closeDialog"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</button>
				</form>
				<h2 className="text-center font-bold text-warning text-xl mb-10">
					{task.title}
				</h2>
				<p>{task.description}</p>
			</div>
		</dialog>
	);
}
