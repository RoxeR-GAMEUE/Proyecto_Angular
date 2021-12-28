import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  page: number = 1;
  results: any[] = [];
  onLoad: boolean = false;

  private urlImg: string = "https://image.tmdb.org/t/p/w500";

  constructor(private moviesService: MoviesService) { 
    this.getMovies()
  }

  ngOnInit(): void {
  }

  getMovies(){
    this.moviesService.getAllMovies(this.page).subscribe((data:any) => {
      this.results = this.results.concat(data.results)
      this.onLoad = false;
    })
  }
  getUrlImg(movie:any){
    return `${this.urlImg}/${movie.poster_path}`;
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(!this.onLoad){
        this.onLoad = true;
        this.page++;
        this.getMovies();
      }
    }
  }
}
