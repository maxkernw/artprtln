import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SightingComponent } from './sighting/sighting.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NavComponent } from './nav/nav.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    SightingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
