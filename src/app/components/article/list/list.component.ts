import { Component } from '@angular/core';
import { Article } from '../../../shared/models/article.model';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  articleList! : Article[]

  constructor(
    private _articleService : ArticleService
  ){}

  ngOnInit() {
    this._articleService.getAll().subscribe({
      next : (data : Article[]) => this.articleList = data
    })
  }

  delete(id : number) {

  }
}
