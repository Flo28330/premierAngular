import { Component, OnInit } from '@angular/core';
import { SignUp } from '../sign-up';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignUp: SignUp = {
    email: 'dimitri@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
