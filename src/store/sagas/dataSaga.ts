import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";

import {
  fetchDataFailure,
  fetchDataSucess,
  setLoading
}
  from "../slices/dataSlice";

import type { AxiosResponse } from "axios";
import type { IData } from "../../interfaces/data.types";

function* fetchDataSaga() {
  try {
    yield put(setLoading(true));

    yield delay(1000);

    const response: AxiosResponse<IData[]> = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    )

    yield put(fetchDataSucess(response.data));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error fetching datas ocurred';
    yield put(fetchDataFailure(errorMessage));
  }
}

export default function* dataSaga() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);
}

export const fetchData = () => ({ type: 'FETCH_DATA' });
