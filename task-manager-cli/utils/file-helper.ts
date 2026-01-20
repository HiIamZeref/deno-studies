import { Task } from "../types/task.type.ts";

export async function loadTasksFromFile(filepath: string): Promise<Task[]> {
  try {
    const fileContent = await Deno.readTextFile(filepath);
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading tasks from file: ${error}`);
    return [];
  }
}

export async function saveTasksToFile(
  filepath: string,
  tasks: Task[],
): Promise<void> {
  try {
    const fileContent = JSON.stringify(tasks, null, 2);
    await Deno.writeTextFile(filepath, fileContent);
  } catch (error) {
    console.error(`Error saving tasks to file: ${error}`);
  }
}
