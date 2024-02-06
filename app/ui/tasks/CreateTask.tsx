"use client";
import { create } from "@/app/actions/taskAction";
import { TaskSchema } from "@/app/lib/types";
import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function CreateTask() {
	const formAction = async (formData: FormData) => {
		const newTask = {
			title: formData.get("title") as string,
			description: formData.get("description") as string,
			date: formData.get("date") as string,
			isImportant: formData.get("isImportant") === "true",
			isCompleted: false,
		};

		const result = TaskSchema.safeParse(newTask);
		if (!result.success) {
			let errorMessage = "";

			result.error.issues.forEach((issue) => {
				errorMessage =
					errorMessage + issue.path[0] + ": " + issue.message + ". ";
			});
			toast.error(errorMessage);
			return;
		}

		const response = await create(result.data);
		if (response?.error) {
			toast.error(response.error);
		}
		toast.success("Succesfully Added New Task!");
		ref.current?.reset();
		const buttonElement = document.getElementById("closeDialog");

		if (buttonElement) buttonElement.click();
	};

	const openModal = () => {
		const modal = document.getElementById("modal") as HTMLDialogElement;
		if (modal) {
			modal.showModal();
		}
	};

	const ref = useRef<HTMLFormElement>(null);

	return (
		<>
			<button className="btn hover:text-white" onClick={openModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6 "
				>
					<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
				</svg>
			</button>
			<dialog id="modal" className="modal">
				<div className="modal-box flex flex-col content-center">
					<form method="dialog">
						<button
							id="closeDialog"
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						>
							✕
						</button>
					</form>
					<form ref={ref} action={formAction}>
						<h3 className="font-bold text-lg mb-3">Create Tasks!</h3>
						<label className="form-control w-full max-w-xs mb-3">
							<div className="label">
								<span className="label-text">Title</span>
							</div>
							<input
								type="text"
								placeholder="Type Title"
								className="input input-bordered w-full max-w-xs"
								name="title"
							/>
						</label>
						<label className="form-control mb-3">
							<div className="label">
								<span className="label-text">Description</span>
							</div>
							<textarea
								className="textarea textarea-bordered h-24"
								placeholder="Type Any Description"
								name="description"
							></textarea>
						</label>
						<label className="form-control w-full max-w-xs mb-5">
							<div className="label">
								<span className="label-text">Date</span>
							</div>
							<input
								type="date"
								className="input input-bordered w-full max-w-xs"
								name="date"
							/>
						</label>
						<div className="form-control w-44 mb-3">
							<label className="cursor-pointer label">
								<span className="label-text">Is Important?</span>
								<input
									name="isImportant"
									type="checkbox"
									className="toggle toggle-warning"
									value="true"
								/>
							</label>
						</div>
						<button
							type="submit"
							className="btn btn-warning text-center w-full"
						>
							Create Task
						</button>
					</form>
				</div>
			</dialog>
		</>
	);
}
