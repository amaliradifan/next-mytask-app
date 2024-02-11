import { z } from "zod";

export const TaskSchema = z.object({
	id: z.string().optional(),
	title: z.string().trim().min(1).max(100),
	description: z.string().nullable(),
	date: z.string(),
	isCompleted: z.boolean(),
	isImportant: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;
