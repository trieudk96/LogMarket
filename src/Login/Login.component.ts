import { Account } from './../models/Account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  account: Account;
  constructor() {
    this.account = new Account();
   }

  ngOnInit() {
  }

}
