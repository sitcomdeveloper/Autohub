import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './index/login/login.component';
import { IndexRoutingModule } from './index-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
