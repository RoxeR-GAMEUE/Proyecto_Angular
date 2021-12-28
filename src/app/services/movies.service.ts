import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = "https://api.themoviedb.org/3/movie/popular";
  private api_key: string = "ad7d8906f3b9c16ce60c4720db0dc3ef";

  constructor(private http : HttpClient) { }

  getAllMovies(page: number){
    return this.http.get(`${this.url}/?api_key=${this.api_key}&page=${page}`)
  }
}
