import { NgModule } from '@angular/core';
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
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
