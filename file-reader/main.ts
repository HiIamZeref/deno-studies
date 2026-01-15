export function add(a: number, b: number): number {
  return a + b;
}

export function readFile(path: string): Promise<string> {
  return Deno.readTextFile(path);
}

//This script needs to be run with the --allow-read flag
// "deno run --allow-read main.ts file.txt" for example
if (import.meta.main) {
  // Getting file path from the arguments
  const filePath = Deno.args[0];

  // Check if exists
  if (!filePath) {
    console.error("File path is required");
    Deno.exit(1);
  }

  // Try reading the file
  try {
    const fileContent = await readFile(filePath);
    console.log("File content:", fileContent);
    console.log("--------------------------------\n");
  } catch (error) {
    console.error("Error reading file:", error);
    Deno.exit(1);
  }
}
