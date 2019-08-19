import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      window.location.assign('/')
    }
  }

onLogout(){
  localStorage.removeItem('token')
  document.location.assign('/')
}

}
