import type { IData } from "./data.types";

export interface IDataState {
  data: IData[];
  error: string | null;
  favoritesData: IData[];
  isLoading: boolean;
  modalData: IData | null;
  search: string;
  showModal: boolean;
  showFavorites: boolean;
}
