import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { ShowInfoModule } from './show-info/show-info.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ShowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    ShowInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
