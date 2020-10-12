import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './index/login/login.component';

const routes: Routes = [
  // {
    // path: 'index', children: [
      // {path: '',redirectTo: 'index', pathMatch: 'full'},
      // {path: 'index', component: IndexComponent},
      {path: '', component: LoginComponent}
    // ]
  // }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
