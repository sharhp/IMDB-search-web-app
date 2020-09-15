import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

  searchTitle: string;

  constructor(
    private http: HttpClient
  ) { }

  fetchMovies(): Observable<any> {
    if (this.searchTitle === undefined || this.searchTitle === null) { this.searchTitle = ''; }
    const url = 'http://localhost:3000/omdb/search?title=' + this.searchTitle;
    return this.http.get(url);
  }
}
