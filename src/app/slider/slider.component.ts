import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interface/movie';
import { DatabaseService } from '../services/databse.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  movies: Movie[] = [];

  loading = false;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.loading = true;
    this.databaseService.getMovies().subscribe( data => {
        this.movies = data;
        console.log(this.movies);
      });
  }

  images = [1, 2, 3].map((n) => `../assets/img/poster${n}.png`);
}
