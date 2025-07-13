export interface IToolbar {
  setSearch: (params: string) => void;
  showFavorites: boolean;
  search: string;
  setShowFavorites: (isFavorites: boolean) => void;
}
