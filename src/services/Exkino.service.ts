import { API_KEY, API_URL } from '@/const/api'
import { IMovie } from '@/types/movie.interface'
import { IMovies } from '@/types/movies.interface'
import { IQuery } from '@/types/query.interface'
import { getCurrentYear } from '@/utils/getCurrentYear'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const exkinoAPI = createApi({
  reducerPath: 'exkinoAPI',
  baseQuery: fetchBaseQuery({baseUrl: "https://api.kinopoisk.dev/v1.3"}),
  endpoints: (build) => ({
    getFilmById: build.query<IMovie, string | string[] | undefined>({
			query: (id) => `/movie?search=${id}&field=id&token=5FZG5S2-RPRMYJ2-G8NB410-JAS5V37`,
		}),
    getNewFilms: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=5FZG5S2-RPRMYJ2-G8NB410-JAS5V37`,
		}),
    getNewSeries: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=5FZG5S2-RPRMYJ2-G8NB410-JAS5V37`,
		}),
    getCartoons: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=3&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=5FZG5S2-RPRMYJ2-G8NB410-JAS5V37`,
		}),
    getComedyMovies: build.query<IMovies, number>({
			query: (limit) =>
				`/movie?search[]=komediya&field[]=genres.name/field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=5FZG5S2-RPRMYJ2-G8NB410-JAS5V37`,
		}),
    // getCartoons: build.query<IMovies, IQuery>({
		// 	query: ({ filters, page }) =>
		// 		`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=5FZG5S2-RPRMYJ2-G8NB410-JAS5V37`,
		// }),
  })
})

export const {
  useGetFilmByIdQuery,
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetCartoonsQuery,
  useGetComedyMoviesQuery,
} = exkinoAPI

export const {
  getFilmById,
  getNewFilms,
  getNewSeries,
  getCartoons,
  getComedyMovies,
} = exkinoAPI.endpoints