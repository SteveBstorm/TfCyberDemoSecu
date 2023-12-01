import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url : string = environment.apiurl
  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Article[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})

    return this._client.get<Article[]>(this.url+"article", {headers : myHeader})
  }
}
