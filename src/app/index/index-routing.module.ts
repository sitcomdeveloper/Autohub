import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

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
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
