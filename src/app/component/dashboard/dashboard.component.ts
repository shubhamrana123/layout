import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { HeaderAfterComponent } from 'src/app/login-after/header-after/header-after.component';
import { SidebarAfterComponent } from 'src/app/login-after/sidebar-after/sidebar-after.component';
import { FooterAfterComponent } from 'src/app/login-after/footer-after/footer-after.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  userListing(){
    this.router.navigate(['user'])
  }

}
