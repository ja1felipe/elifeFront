import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any;
  err : any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private date: DataService) { }

  ngOnInit() {
    if(sessionStorage.getItem('token')){
      window.location.assign('news')
    }
    this.form = this.fb.group({
      token: [null, [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.form.value.token)
    this.date.login(this.form.value.token).subscribe(
      success => {
        this.token = success
        sessionStorage.setItem('token', this.token.token)
        window.location.assign('news')
      },
      error => {
        console.log(error)
      }
    )
    
}

}
