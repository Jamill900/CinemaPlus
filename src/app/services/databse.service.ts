import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "../interface/movie";
import { catchError, concatMap, find, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  constructor(private http: HttpClient) {}

  private moviesUrl = 'api/movies'

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T>  => {
      console.error(error);

      return of(result as T);
    };
  }

  movies: Movie[] = [];

  // Get All Movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
    catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  searchMovies(term: string): Observable<Movie[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    )
  }
  
  
    
}