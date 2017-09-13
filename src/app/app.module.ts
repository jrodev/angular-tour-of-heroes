import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// others
import { HeroService } from './services/hero.service';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
	DashboardComponent,
	HeroesComponent,
	HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
	AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
