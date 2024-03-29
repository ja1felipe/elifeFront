import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material'
import { MatDialog, MatDialogConfig} from '@angular/material'
import { ArticleComponent } from 'src/app/article/article.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  listData : MatTableDataSource<any>
  columns: string[] = ['title', 'description', 'theme', 'link', 'linkImg', 'actions']
  articles$ : any
  @ViewChild(MatPaginator, {static : false}) paginator : MatPaginator

  constructor(private service: DataService, private dialog : MatDialog) { }

  ngOnInit() {
    this.update()
  }

  onCreate(){
    this.service.initialForm()
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "60%"
    this.dialog.open(ArticleComponent, dialogConfig).afterClosed().subscribe(
      success => this.update()
    )
  }

  onEdit(item){
    this.service.populate(item)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "60%"
    this.dialog.open(ArticleComponent, dialogConfig).afterClosed().subscribe(
      success => this.update()
    )
  }

  onDelete(item){
    console.log(item)
    this.service.delete(item._id).subscribe(
      success => console.log('Sucess on delete'),
      error => console.log('Error on delete')
    )
    this.update()
  }

  update(){
    this.service.getNews().subscribe(
      data => {
        this.articles$ = data
        this.listData = new MatTableDataSource(this.articles$)
        this.listData.paginator = this.paginator
      }
    )
  }

}
