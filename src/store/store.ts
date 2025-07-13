import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import createSagaMiddleware from "redux-saga";
import dataSaga from "./sagas/dataSaga";

const sagaMiddle = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    datas: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddle)
})

sagaMiddle.run(dataSaga);

export type RootState = ReturnType<typeof store.getState>
export type DataDispatch = typeof store.dispatch
