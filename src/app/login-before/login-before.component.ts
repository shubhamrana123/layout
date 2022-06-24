import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-before',
  templateUrl: './login-before.component.html',
  styleUrls: ['./login-before.component.css']
})
export class LoginBeforeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
routeToDashboard(){
  this.router.navigate(['app'])
}
}
