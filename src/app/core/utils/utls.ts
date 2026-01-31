export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function extractId(url: string) {
  const match = url.match(/\/(\d+)\/$/);
  return match ? parseInt(match[1], 10) : NaN;
}
