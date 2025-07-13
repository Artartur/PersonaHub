import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IData } from "../../interfaces/data.types";
import type { IDataState } from "../../interfaces/dataState.types";

const initialState: IDataState = {
  data: [],
  error: null,
  favoritesData: [],
  isLoading: true,
  modalData: null,
  search: '',
  showModal: false,
  showFavorites: false,
}

const dataSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const item = state.data.find(item => item.id === id)
      if (item && !state.favoritesData.some(fav => fav.id === id)) {
        state.favoritesData.push(item)
      }
    },
    closeModal: (state) => {
      state.showModal = false
      state.modalData = null
    },
    fetchDataSucess: (state, action: PayloadAction<IData[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    openModal: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const item = state.data.find(item => item.id === id)
      state.modalData = item || null
      state.showModal = true
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.favoritesData = state.favoritesData.filter(item => item.id !== id)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
    setShowFavorites: (state, action: PayloadAction<boolean>) => {
      state.showFavorites = action.payload
    },
    setModalData: (state, action: PayloadAction<IData | null>) => {
      state.modalData = action.payload
    }
  }
})

export const {
  addToFavorites,
  closeModal,
  fetchDataFailure,
  fetchDataSucess,
  openModal,
  removeFromFavorites,
  setLoading,
  setModalData,
  setSearch,
  setShowFavorites,
  setShowModal,
} = dataSlice.actions

export default dataSlice.reducer
