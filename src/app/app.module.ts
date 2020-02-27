import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Module as ModuleHome } from '../pages/home/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ModuleHome,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
