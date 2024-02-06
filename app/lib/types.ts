import { z } from "zod";

export const TaskSchema = z.object({
	title: z.string().trim().min(1).max(100),
	description: z.string().min(2),
	date: z.string(),
	isCompleted: z.boolean(),
	isImportant: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;
