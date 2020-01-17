import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usernameForm = 'username';
  passwordForm = 'password';

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      [this.usernameForm]: ['', Validators.required],
      [this.passwordForm]: ['', Validators.required]
    });
  }

  signIn() {
    const username = this.formGroup.get(this.usernameForm).value;
    const password = this.formGroup.get(this.passwordForm).value;
  }
}
