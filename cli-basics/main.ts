import { Command } from "@cliffy/command";
import { greetCommand, countCommand } from "./cli-test-commands.ts";

await new Command()
  .name("My First CLI")
  .version("1.0.0")
  .description("A simple CLI to test the basics of the Command package")
  .command("greet", greetCommand)
  .command("count", countCommand)
  .parse(Deno.args);
