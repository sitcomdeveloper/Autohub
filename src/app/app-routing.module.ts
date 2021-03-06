import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
  {path:'index',loadChildren:()=>import('./index/index.module').then(m=>m.IndexModule)},
  // {path: 'index', loadChildren: './index/index.module#IndexModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
