import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { DataService } from './data.service'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news/news-list/news-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ArticleComponent,
    LoginComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents:[ArticleComponent]
})
export class AppModule { }
