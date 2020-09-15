import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../service/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTitle: string

  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  onSearchClick() {
    this.searchService.searchTitle = this.searchTitle
    this.router.navigate(['/display'], { skipLocationChange: true })
  }

}
