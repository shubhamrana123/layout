import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { HeaderBeforeComponent } from 'src/app/login-before/header-before/header-before.component';
import { SidebarBeforeComponent } from 'src/app/login-before/sidebar-before/sidebar-before.component';
import { FooterBeforeComponent } from 'src/app/login-before/footer-before/footer-before.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// @ViewChild(HeaderBeforeComponent) HeaderBeforeComponent:HeaderBeforeComponent
// @ViewChild(SidebarBeforeComponent) SidebarBeforeComponent:SidebarBeforeComponent
// @ViewChild(FooterBeforeComponent) FooterBeforeComponent:FooterBeforeComponent

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routeToDashboard(){
this.router.navigate(['dashboard'])
  }

}
