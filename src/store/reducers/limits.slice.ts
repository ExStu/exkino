import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filmsLimit: 10,
  seriesLimit: 10,
  imagesLimit: 9
}

export const limitSlice = createSlice({
  name: 'limits',
  initialState,
  reducers: {
    loadMoreFilms: (state) => {
      state.filmsLimit += 10
    },
    loadMoreSeries: (state) => {
      state.seriesLimit += 10
    },
    loadMoreImages: (state) => {
      state.imagesLimit += 9
    },
  }
})

export const {loadMoreFilms, loadMoreSeries, loadMoreImages} = limitSlice.actions;

export const limitReducer = limitSlice.reducer;