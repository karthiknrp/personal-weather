import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { WeatherParameters } from './weatherparameters';

const routes : Routes = [
  {path:'weather',component:WeatherComponent}
]; 
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [WeatherService,WeatherParameters],
  bootstrap: [AppComponent]
})
export class AppModule { }
