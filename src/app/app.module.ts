import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { Prototype1Component } from './pages/prototype1/prototype1.component';
import { Prototype2Component } from './pages/prototype2/prototype2.component';

@NgModule({
  declarations: [
    AppComponent,
    Prototype1Component,
    Prototype2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
