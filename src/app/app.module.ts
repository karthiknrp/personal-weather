import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsService } from './dogs.service';
import { PenguinComponent } from './penguin/penguin.component';
import { WeatherService } from './weather.service';
import { WeatherParameters } from './weatherparameters';

const routes : Routes = [
  {path:'weather',component:WeatherComponent},
  {path:'dogs',component:DogsComponent},
  {path:'penguins',component:PenguinComponent}
]; 
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DogsComponent,
    PenguinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [DogsService,WeatherService,WeatherParameters],
  bootstrap: [AppComponent]
})
export class AppModule { }
