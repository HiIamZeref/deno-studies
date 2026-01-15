export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // Hello world message
  console.log("Hello from Deno! 🦕");
  console.log("--------------------------------\n");

  // Destructure the Deno.version object
  const { typescript, deno, v8 } = Deno.version;
  console.log("Typescript version", typescript);
  console.log("Deno version", deno);
  console.log("V8 version", v8);
  console.log("--------------------------------\n");

  // Trying to get the current working directory
  const cwd = Deno.cwd();
  console.log("Current working directory", cwd);
  console.log("--------------------------------\n");

  // Trying to get env values
  // To run this part, we need to allow the script to run with the --allow-env flag
  // deno run --allow-env main.ts
  const env = Deno.env.get("HOME");
  console.log("HOME environment variable", env);
  console.log("--------------------------------\n");
}
