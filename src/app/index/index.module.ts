import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './index/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, BrowserModule,
    IndexRoutingModule
  ],
})
export class IndexModule { }
