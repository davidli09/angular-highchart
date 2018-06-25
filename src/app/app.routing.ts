import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Prototype1Component } from './pages/prototype1/prototype1.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'prototype1', component: Prototype1Component },
      { path: '**', redirectTo: 'prototype1', pathMatch: 'full' }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
