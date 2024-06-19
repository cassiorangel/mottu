export interface Users {
  info: Info;
  results: Result[];
}
export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  favorite?: boolean;
  url: string;
  created: string;
}
export interface Origin {
  name: string;
  url: string;
}
export interface Info {
  count: number;
  pages: number;
  next?: any;
  prev?: any;
}