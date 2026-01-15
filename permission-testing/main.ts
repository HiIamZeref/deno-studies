// This script is a lab to test the permissions of the script
// It needs to be run with the --allow-read and --allow-env flags
// deno run --allow-read --allow-env main.ts
// You could use the -A flag to allow all permissions
// "deno run -A main.ts" or "deno run --allow-all main.ts"
if (import.meta.main) {
  // Trying to read the file
  try {
    await Deno.readTextFile("secrets.txt");
    console.log("File read successfully!");
  } catch (error) {
    console.error("Error reading file:", error);
    Deno.exit(1);
  }

  // Trying to access the environment variables
  try {
    const env = Deno.env.get("HOME");
    console.log("HOME environment variable:", env);
  } catch (error) {
    console.error("Error accessing environment variables:", error);
    Deno.exit(1);
  }
}
