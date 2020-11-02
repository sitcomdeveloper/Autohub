import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [IndexComponent, LoginComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
})
export class IndexModule { }
