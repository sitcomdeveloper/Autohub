import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    // IndexComponent,
    HeaderComponent,
    FooterComponent,
    OtpComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [OtpComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
