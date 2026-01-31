export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface Item {
  url: string;
  created: string;
  edited: string;
}
