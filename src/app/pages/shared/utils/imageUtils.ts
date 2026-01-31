export function getFilmImageSrc(idx: number) {
  return `images/films/${((idx - 1) % 6) + 1}.png`;
}

export function getCharacterImageSrc(idx: number) {
  return `images/characters/${((idx - 1) % 6) + 1}.png`;
}

export function getPlanetImageSrc(idx: number) {
  return `images/planets/${((idx - 1) % 6) + 1}.png`;
}
