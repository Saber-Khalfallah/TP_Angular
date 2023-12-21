import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeFilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
