import { Component } from '@angular/core';
import { Article } from '../../../shared/models/article.model';
import { ArticleService } from '../../../services/article.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  articleList! : Article[]

  role! : string | undefined

  constructor(
    private _articleService : ArticleService,
    private _auth : AuthService,
    private _router : Router
  ){}

  ngOnInit() {
    this.loadItems()

    this.role = this._auth.connectedUser?.role
  }

  loadItems() {
    this._articleService.getAll().subscribe({
      next : (data : Article[]) => this.articleList = data
    })
  }

  delete(id : number) {
    this._articleService.delete(id).subscribe( {
      next : () => this.loadItems()
    })
  }

  update(id : number){
    this._router.navigate(["article/update", id])
  }
}
