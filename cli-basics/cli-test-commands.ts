import { Command } from "@cliffy/command";
import { colors } from "@cliffy/ansi/colors";

export const greetCommand = new Command()
  .name("greet")
  .description("Greet the user")
  .option("-n, --name <name:string>", "The name of the user")
  .option("-l, --loud", "Make the greeting louder")
  .action((options) => {
    const greeting = options.name ? `Hello, ${options.name}!` : "Hello, world!";

    if (options.loud) {
      console.log(colors.green(greeting.toUpperCase()));
    } else {
      console.log(colors.blue(greeting));
    }
  });

export const countCommand = new Command()
  .name("count")
  .description("Count the number of characters in the input")
  .arguments("<number:number>")
  .action((_options, number: number) => {
    for (let i = 0; i < number; i++) {
      console.log(colors.green(i.toString()));
    }
  });
