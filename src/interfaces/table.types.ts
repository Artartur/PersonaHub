import type { IData } from "./data.types";

export interface ITable {
  addToFavorites: (id: number) => void;
  filter: IData[];
  isFavorite: (id: number) => boolean;
  openModal: (id: number) => void;
  removeFromFavorites: (id: number) => void;
}
