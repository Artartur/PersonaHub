import type { IData } from "./data.types";

export interface IModal {
  data: IData;
  closeModal: () => void;
};
