import { useDispatch } from "react-redux";
import type { DataDispatch } from "../store/store";

export const useDataDispatch = () => useDispatch<DataDispatch>();
