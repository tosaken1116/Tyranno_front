export const envGuard = (env: string | undefined, path: string): string => {
  if (env === undefined) {
    throw new Error(`env is undefined ${path}`);
  }
  return env;
};
