import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { RandComponent } from './rand/rand.component'
import { AppComponent } from './app.component';
import { RandiComponent } from './randi/randi.component';

@NgModule({
  declarations: [
    AppComponent,
    RandComponent,
    RandiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
