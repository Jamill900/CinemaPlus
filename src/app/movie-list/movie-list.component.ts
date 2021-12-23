import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { DatabaseService } from '../services/databse.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  title: any;
  p: number = 1;

  loading = false;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() :void {
    this.getMovies();
  }

  getMovies(){
    this.loading = true;
    this.databaseService.getMovies().subscribe( movies => {
        this.movies = movies;
      })
  }

  search() {
    if (this.title == "") {
      this.ngOnInit();
    }
    else {
      this.movies = this.movies.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }
  
}
