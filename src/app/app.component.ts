import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userDetails: FormGroup = new FormGroup({});
  errorMessages = {
    name : [
      {type: 'required', message: 'Name is required'},
      {type:'minlength', message:'Minimum 5 characters needed'},
      {type:'maxlength', message:'Maximum 10 character is allowed'}
  ],
    age: [
      {type:'required' , message:'Age is required'},
      {type:'min', message:'Age  between 18 to 30'},
      {type:'max', message:'Age  between 18 to 30'}
    ],  
    contact: [
      {type:'required' , message:'Contact is required'},
      {type:'minlength', message:'Contact should be 10 digits'},
      {type:'maxlength', message:'Contact should be 10 digits'}
    ],
    email:[
      {type:'required' , message:'Email is required'},
      {type:'pattern', message:'Email is not valid'}
    ]
  }
  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
this.userDetails = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  age: [null, [Validators.required, Validators.min(18), Validators.max(30)]],
  contact: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
})
  }

  get name(){
    return this.userDetails.get('name')
  }
  get age(){
    return this.userDetails.get('age')
  }
  get contact(){
    return this.userDetails.get('contact')
  }
  get email(){
    return this.userDetails.get('email')
  }

  getFormKey(args: any){
    let data = Object.keys(args)

    return Object.keys(args)
  }
  onSubmit(){
this.userDetails.markAllAsTouched();

    console.log(this.userDetails.valid)
  }
}
