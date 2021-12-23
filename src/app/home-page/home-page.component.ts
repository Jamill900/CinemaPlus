import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { DatabaseService } from '../services/databse.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
