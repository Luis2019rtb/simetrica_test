export type Nullable<T> = T | null;


export interface IPokemon {
  key:string | number
  name: string;
  url: string;
  sprite:string;
}

export interface IFavorite extends IPokemon {
  alias?: string;
  createdAt?: Date;
}

export interface IResponse {
  next: Nullable<string>;
  previous: Nullable<string>;
  results: IPokemon[];
  count: number;
}
