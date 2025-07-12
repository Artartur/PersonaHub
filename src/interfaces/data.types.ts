import type { IAddress } from "./address";
import type { ICompany } from "./company";

export interface IData {
  id: number;
  address: IAddress;
  company: ICompany;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}
