import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
// import { LoginComponent } from './index/login/login.component';

const routes: Routes = [
  // {
    // path: 'index', children: [
      // {path: '',redirectTo: 'index', pathMatch: 'full'},
      // {path: 'index', component: IndexComponent},
      {path: '', component: IndexComponent}
    // ]
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
