import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomeValidator } from '../CustomeValidator.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  sigInForm = new FormGroup({
                            'userName': new FormControl('', [Validators.required, Validators.email, CustomeValidator.Checkspace])
                           });
 get UsernameAccessor() { return this.sigInForm.get('userName'); }
  ngOnInit() {
  }



}
