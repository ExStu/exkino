import { API_KEY, API_URL } from '@/const/api'
import { IMovie } from '@/types/movie.interface'
import { IMovies } from '@/types/movies.interface'
import { IQuery } from '@/types/query.interface'
import { getCurrentYear } from '@/utils/getCurrentYear'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const exkinoAPI = createApi({
  reducerPath: 'exkinoAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getFilmById: build.query<IMovie, string | string[] | undefined>({
			query: (id) => `/movie?search=${id}&field=id&token=${API_KEY}`,
		}),
    getNewFilms: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
		}),
    getNewSeries: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
		}),
    getCartoons: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=3&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
		}),
    getComedyMovies: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?year=${getCurrentYear()}&genres.name=комедия&poster.previewUrl=!null&name=!null&sortField=votes.kp&sortType=-1&limit=${limit}&token=${API_KEY}`,
		}),
    getDramaMovies: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?year=${getCurrentYear()}&genres.name=драма&poster.previewUrl=!null&name=!null&sortField=votes.kp&sortType=-1&limit=${limit}&token=${API_KEY}`,
		}),
    getFamilyMovies: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?year=${getCurrentYear()}&genres.name=семейный&poster.previewUrl=!null&name=!null&sortField=votes.kp&sortType=-1&limit=${limit}&token=${API_KEY}`,
		}),
    // getCatalog: build.query<IMovies, number>({
    //   query: (limit) =>
    //     ``
    // })
    getFilms: build.query<IMovies, IQuery>({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`,
		}),
		getSeries: build.query<IMovies, IQuery>({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`,
		}),
  })
})

export const {
  useGetFilmByIdQuery,
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetCartoonsQuery,
  useGetComedyMoviesQuery,
  useGetDramaMoviesQuery,
  useGetFamilyMoviesQuery,
} = exkinoAPI

export const {
  getFilmById,
  getNewFilms,
  getNewSeries,
  getCartoons,
  getComedyMovies,
  getDramaMovies,
  getFamilyMovies,
} = exkinoAPI.endpoints