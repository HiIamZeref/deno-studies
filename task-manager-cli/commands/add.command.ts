import { Command } from "@cliffy/command";
import { colors } from "@cliffy/ansi/colors";
import { loadTasksFromFile, saveTasksToFile } from "../utils/file-helper.ts";
import { Task } from "../types/task.type.ts";
import { resolveConfig } from "../config/config.ts";

interface AddCommandOptions {
  description?: string;
  filepath?: string; // Global option from parent
}

export const addCommand = new Command()
  .name("add")
  .description("Add a new task to the task list")
  .arguments("<title:string>")
  .option(
    "-d, --description <description:string>",
    "The description of the task",
  )
  .action(async (options: AddCommandOptions, title: string) => {
    const config = resolveConfig({ filepath: options.filepath });
    const { filepath } = config;

    try {
      const tasks = await loadTasksFromFile(filepath);
      const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        description: options.description || "",
        completed: false,
      };
      tasks.push(newTask);
      await saveTasksToFile(filepath, tasks);
      console.log(colors.green(`Task "${title}" added successfully.`));
    } catch (error) {
      console.error(colors.red(`Error adding task: ${error}`));
      Deno.exit(1);
    }
  });
