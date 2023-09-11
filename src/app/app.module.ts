import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedUrlsListComponent } from './components/seed-urls-list/seed-urls-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewScreapingComponent } from './components/new-scraping/new-scraping.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultListComponent } from './components/result-list/result-list.component';
import { HomeComponent } from './home/home.component';
import { UrlHostDirective } from './directives/url-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    SeedUrlsListComponent,
    NewScreapingComponent,
    ResultListComponent,
    HomeComponent,
    UrlHostDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
