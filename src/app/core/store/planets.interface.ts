import { ApiResponse, Item } from './swapi.interfaces';

export interface PlanetListApiResponse extends ApiResponse {
  results: PlanetDto[];
}

export interface PlanetDto extends Item {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residends: string[];
  films: string[];
}

export interface Planet extends Item {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residends: string[];
  films: string[];
}
