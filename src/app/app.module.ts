import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeBackendProvider } from './services/fake-backend-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeDataService } from './services/poke-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FakeBackendProvider, PokeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
