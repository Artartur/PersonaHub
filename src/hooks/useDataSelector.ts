import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../store/store'

export const useDataSelector: TypedUseSelectorHook<RootState> = useSelector;
