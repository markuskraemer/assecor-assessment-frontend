export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function extractId(url: string) {
  const match = url.match(/\/films\/(\d+)\/$/);
  return match ? parseInt(match[1], 10) : NaN;
}

export function getFilmImageSrc(idx: number) {
  return `images/films/${((idx - 1) % 6) + 1}.png`;
}
