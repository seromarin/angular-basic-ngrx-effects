import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  @ViewChild('userID') userID: ElementRef;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  showUser(userID) {
    if (userID) {
      this.router.navigate([userID]);
      this.userID.nativeElement.value = '';
    }
  }

}
