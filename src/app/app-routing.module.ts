import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArbolQaComponent } from './pages/arbol-qa/arbol-qa.component';



const routes: Routes = [
{path: 'pages/dashboard', component: DashboardComponent},
{path: 'pages/arbolQa', component: ArbolQaComponent},
{path: '**', pathMatch: 'full', redirectTo: '/pages/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
