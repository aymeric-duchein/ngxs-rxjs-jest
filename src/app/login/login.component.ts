import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserState} from '../core/user/user.state';
import {Observable} from 'rxjs';
import {SignInButtonClick} from './login.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Select(UserState.getError) error$: Observable<string>;

  usernameForm = 'username';
  passwordForm = 'password';

  formGroup: FormGroup;

  constructor(private readonly store: Store, private readonly formBuilder: FormBuilder) {
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
    this.store.dispatch(new SignInButtonClick(username, password));
  }
}
