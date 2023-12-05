import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../shared/models/article.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url : string = environment.apiurl
  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  getAll() : Observable<Article[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})

    return this._client.get<Article[]>(this.url+"article", {headers : myHeader})
  }

  delete(id : number) : Observable<any> {
    return this._client.delete(this.url+ "article/"+id)
  }

  create(newArticle : Article) {
    this._client.post(this.url+"article", newArticle).subscribe({
      next : () => this._router.navigate(["article/list"])
    })
  }

  getById(id : number) : Observable<Article> {
    return this._client.get<Article>(this.url + "article/"+id)
  }

  update(article : Article) : Observable<any> {
    return this._client.patch(this.url+"article/"+article.id, article)
  }
}
