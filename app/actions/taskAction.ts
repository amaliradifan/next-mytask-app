"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
import { Task, TaskSchema } from "../lib/types";

export const create = async (newTask: Task) => {
	const result = TaskSchema.safeParse(newTask);
	if (!result.success) {
		let errorMessage = "";

		result.error.issues.forEach((issue) => {
			errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
		});
		return {
			error: errorMessage,
		};
	}
	await prisma.task.create({
		data: result.data,
	});
	revalidatePath("/");
};

export const edit = async (id: string, updatedTask: Task) => {
    const result = TaskSchema.safeParse(updatedTask);
    if (!result.success) {
        let errorMessage = "";

        result.error.issues.forEach((issue) => {
            errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
        });
        return {
            error: errorMessage,
        };
    }
    await prisma.task.update({
        where: { id: id },
        data: result.data,
    });
    revalidatePath("/");
};
