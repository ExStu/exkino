import { IData } from './data.interface'
import { IMovie } from './movie.interface'

export interface IMovies extends IData {
  docs: IMovie[]
}