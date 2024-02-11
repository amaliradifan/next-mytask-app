"use client";
import { Task } from "@/app/lib/types";
import React from "react";

type props = { task: Task };

export default function TaskCard({ task }: props) {
	const openModal = () => {
		const modal = document.getElementById("modal") as HTMLDialogElement;
		if (modal) {
			modal.showModal();
		}
	};

	return (
		<div
			onClick={openModal}
			className="card max max-w-72 mb-8 bg-base-100 shadow-xl mx-4 h-60 hover:border-warning hover:scale-110 transition duration-300 ease-in-out flex-grow"
		>
			<div className="card-body break-normal">
				<h2 className="card-title text-warning">{task.title}</h2>
				<p className="text-justify w-5/6">
					{task.description && task.description.length > 70
						? task.description.substring(0, 70) + "..."
						: task.description}
				</p>
				<div className="card-actions justify-end">
					{task.isImportant ? (
						<div className="flex text-warning">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
								/>
							</svg>
							<h6 className="text-base">important</h6>
						</div>
					) : null}
					{task.isCompleted ? (
						<div className="flex text-success">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
								/>
							</svg>

							<h6 className="text-base">Completed</h6>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
