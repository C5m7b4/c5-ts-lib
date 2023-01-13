export const traceMap =
  <T>(label: string) =>
  (x: T[]): T[] => {
    // eslint-disable-next-line no-console
    console.log(`${label}: ${x.map((i) => JSON.stringify(i))}`);
    return x;
  };

export const trace =
  <T>(label: string) =>
  (x: T[]): T[] => {
    // eslint-disable-next-line no-console
    console.log(`${label}: ${x}`);
    return x;
  };
