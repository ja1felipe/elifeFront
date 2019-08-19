import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { NotificationService } from '../notification.service'
import { Data } from '@angular/router';
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(public service : DataService, private notification : NotificationService, public dialogRef : MatDialogRef<ArticleComponent>) { }

  themes = [
    {id: "Política", value : "Política"},
    {id: "Esportes", value : "Esportes"},
    {id: "Entreterimento", value : "Entreterimento"},
    {id: "Famosos", value : "Famosos"}
  ]
  ngOnInit() {
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.value._id) {
        this.service.update(this.service.form.value).subscribe(
          success => this.notification.success('Notícia atualizada com sucesso'),
          error => console.log(error)
        )
      } else {
        this.service.create(this.service.form.value).subscribe(
          success => {
            this.notification.success('Notícia criada com sucesso')
          },
          error => console.log(error)
        )
      }
      this.service.form.reset()
      this.service.initialForm()
      this.onClose()
    }
  }

  onClose(){
    this.service.form.reset()
    this.service.initialForm()
    this.dialogRef.close()
  }

}
