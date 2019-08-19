import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  form : FormGroup = new FormGroup({
    _id : new FormControl(null),
    linkImg : new FormControl('', Validators.required),
    title : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    theme : new FormControl('', Validators.required),
    link : new FormControl('', Validators.required)
  })

  header = new HttpHeaders({
    "Authorization" : 'Bearer ' + sessionStorage.getItem('token')
  })
  
  constructor(private http: HttpClient) { 

   }

   initialForm(){
     this.form.setValue({
       _id : null,
       linkImg : '',
       title : '',
       description : '',
       theme : '',
       link : ''
     })
   }

populate(info){
  this.form.patchValue({
    _id : info._id,
    linkImg : info.linkImg,
    title : info.title,
    description : info.description,
    theme : info.theme,
    link : info.link
  })
}

   getNews(){
    return this.http.get(`https://elife-backend.herokuapp.com/news`, {headers : this.header})
  }

  create(news){
    return this.http.post(`https://elife-backend.herokuapp.com/news`, news, {headers : this.header})
  }

  delete(id){
    console.log(id)
    return this.http.delete(`https://elife-backend.herokuapp.com/news/${id}`, {headers : this.header})
  }

  loadById(id){
    return this.http.get(`https://elife-backend.herokuapp.com/news/${id}`, {headers : this.header})
  }

  update(news){
    console.log(news)
    return this.http.put(`https://elife-backend.herokuapp.com/news/${news._id}`, news, {headers : this.header})
  }

   login(password){
    return this.http.post(`https://elife-backend.herokuapp.com/news/auth`, {admin : "admin", password})
   }

}
