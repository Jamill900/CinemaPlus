import { DatabaseService } from './../services/databse.service';
import { Movie } from '../interface/movie';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private databseService: DatabaseService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void { 
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.databseService.searchMovies(term))
    );
  }

}
