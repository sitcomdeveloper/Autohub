import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  citytaxi = true;
  outstation = false;
  rentals = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ctytxi() {
    this.citytaxi = true;
    this.outstation = false;
    this.rentals = false;
  }
  otstation() {
    this.citytaxi = false;
    this.outstation = true;
    this.rentals = false;

  }
  rntls() {
    this.citytaxi = false;
    this.outstation = false;
    this.rentals = true;
  }
  // book now button
  // bookaride() {
  //   this.router.navigateByUrl('login');
  // }
}
