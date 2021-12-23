import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { DatabaseService } from '../services/databse.service';
import { Movie } from '../interface/movie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  isClicked: boolean;
  userForm: FormGroup;
  listData: any;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private location: Location,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder) {
      
      this.listData = [];

      this.userForm = this.fb.group({
        name: ['', Validators.required],
        comment: ['', Validators.required]
      })
    }

    public addItem(): void {
      this.listData.push(this.userForm.value);
      this.userForm.reset();
    }

    reset() {
      this.userForm.reset()
    }

    removeItem(element: any) {
      this.listData.forEach((value: any, index: any) => {
        if (value == element)
          this.listData.splice(index, 1);
      })
    }

  ngOnInit() {
    this.getMovie();
  }

  showTrailer() {
    this.isClicked = !this.isClicked;
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      this.databaseService.getMovie(id).subscribe(movie => this.movie = movie)
  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(this.movie.trailer))
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }

  goBack(): void {
    this.location.back();
  }
}
