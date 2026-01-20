import { load } from "@std/dotenv";
await load({ export: true });

import { Command } from "@cliffy/command";
import { addCommand } from "./commands/add.command.ts";

await new Command()
  .name("Task Manager")
  .version("1.0.0")
  .description("A simple CLI to manage tasks")
  .globalOption("-f, --filepath <filepath:string>", "The file to use for tasks")
  .command("add", addCommand)
  .command("list", "List all tasks")
  .command("complete", "Mark a task as complete")
  .command("remove", "Remove a task")
  .parse(Deno.args);
