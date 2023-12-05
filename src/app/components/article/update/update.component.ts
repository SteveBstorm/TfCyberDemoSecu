import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../shared/models/article.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

  currentId! : number
  currentArticle! : Article

  myFormGroup! : FormGroup
  constructor(
    private _ar : ActivatedRoute,
    private _service : ArticleService,
    private _formBuilder : FormBuilder,
    private _router : Router
    ){}

  ngOnInit(){
    this.currentId = this._ar.snapshot.params["id"]

    this._service.getById(this.currentId).subscribe({
      next : (data : Article) => {
        this.currentArticle = data
        this.myFormGroup = this._formBuilder.group({
          nom : [this.currentArticle.nom, Validators.required],
          prix : [this.currentArticle.prix, [Validators.min(0), Validators.max(2500)]],
          categorie : [this.currentArticle.categorie, Validators.required],
          description : [this.currentArticle.description, Validators.required],
          id : [this.currentId]
        })
      }
    })


  }

  onSubmit() {
    this._service.update(this.myFormGroup.value).subscribe({
      next : () => this._router.navigate(["article/list"])
    })
  }
}
