import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../service/search.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnDestroy {

  searchTitle: string
  movieList: []
  searchServiceSub: Subscription
  emptyList: boolean = false

  constructor(
    private searchService: SearchService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.searchTitle = this.searchService.searchTitle
    console.log(this.searchTitle)
    this.getMovies()
  }

  ngOnDestroy(): void {
    this.searchServiceSub.unsubscribe()
  }
 
  getMovies() {
    this.searchServiceSub = this.searchService.fetchMovies().subscribe(
      data =>{
        this.movieList = data.Search
        console.log(this.movieList)
        if(this.movieList == undefined) this.emptyList = true
        else  this.emptyList = false
      },
      error =>{
        console.log(error)
      }
    )
  }

  onSearchClick() {
    this.searchService.searchTitle = this.searchTitle
    this.getMovies()
  }

  onViewClick(imdbID: string) {
    // https://www.imdb.com/title/
    let url = 'https://www.imdb.com/title/' + imdbID;
    // this.document.location.href = url 
    window.open(url, "_blank");
    // console.log(imdbID)
  }

}
