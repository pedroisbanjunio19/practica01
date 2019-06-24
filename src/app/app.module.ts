import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CiclovidaComponent } from './ciclovida/ciclovida.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CiclovidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
