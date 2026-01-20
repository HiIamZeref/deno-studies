export interface Config {
  readonly filepath: string;
}

export interface ConfigOverrides {
  filepath?: string;
}

const DEFAULTS: Config = {
  filepath: "tasks.json",
} as const;

/**
 * Resolves the configuration following this order:
 * CLI flags > Environment variables > Defaults
 * @param overrides - Optional overrides for the configuration
 * @returns The resolved configuration
 */
export function resolveConfig(overrides: ConfigOverrides = {}): Config {
  return {
    filepath: overrides.filepath ?? Deno.env.get("TASKS_FILE") ??
      DEFAULTS.filepath,
  } as Config;
}
