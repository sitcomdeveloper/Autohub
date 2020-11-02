import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // citytaxi = true;
  // outstation = false;
  // rentals = false;
  constructor(private router: Router, private modalService: BsModalService) { }
  //
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }
  login() {
    this.router.navigateByUrl('/index/login');
  }
  // open otp verification popup
  enterOTPpopup() {
    const initialState = {
      title: 'Enter the OTP',
    };
    // tslint:disable-next-line: max-line-length
    this.bsModalRef = this.modalService.show(OtpComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal750', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    // this.bsmodal.hide();
    // this.bsModalRef.content.clddata.subscribe(data => {
    // this.userDetails();
    // });
  }
}
