import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherParameters } from '../weatherparameters';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

  private cities=[];
  private citiesWeather=[];
  private iconImgUrl="http://openweathermap.org/img/w/";
  private forecast=[];
  private forecastErr;
  private units="imperial";
  private zip;
  private city;
  constructor(private weatherService:WeatherService, private weatherParameters:WeatherParameters) {}

  ngOnInit() {
    this.cities=["pleasanton,US","hyderabad,IN","san jose,US",
                "sacramento,US","olympia,US"];
    for (let c of this.cities){
      this.getWeatherByCity(c);
    }
  }

  getWeatherByZip(zip:number){
    let weather=new Weather();
    weather.err="";
    this.weatherService.getWeatherByZip(zip,this.units)
      .subscribe(
        ((res) => {
          weather=res.json();
          //this.iconImgUrl="http://openweathermap.org/img/w/"+weather.weather[0].icon+".png";
          this.city=weather.name;
        }),
        (error) => weather.err="City Not Found"
    );
    this.weatherParameters.setWeatherParameters(this.units);
  }

  getWeatherByCity(city:string){
    let weather=new Weather();
    this.weatherService.getWeatherByCity(city,this.units)
      .subscribe(
        ((res) => {
          weather.setWeather(res.json().name,res.json().main,res.json().coord,res.json().weather,res.json().wind,res.json().sys);
          console.log(res.json().name);
          weather.err="";
          //weather.iconImgUrl="http://openweathermap.org/img/w/"+weather.weather[0].icon+".png";
          }),
        (error) => weather.err="City Not Found"
      );
      console.log(weather.main);
      this.citiesWeather.push(weather);
      this.weatherParameters.setWeatherParameters(this.units);
    
  }

  getForecastDataByCity(city){
    let forecast=new Forecast();
    this.weatherService.getWeatherForecastByCity(city,this.units)
        .subscribe(
          (res=>{
            this.forecast = res.json().list;
          }),
          (error)=>this.forecastErr = error
        );
    }

}

export class Weather{
  name;
  main;
  coord
  weather;
  wind;
  sys;
  err;
  iconImgUrl;

  constructor(){}

  setWeather(name?,main?,coord?,weather?,wind?,sys?,iconImgUrl?){
    this.name=name;
    this.main=main;
    this.coord=coord;
    this.weather=weather;
    this.wind=wind;
    this.sys=sys;
    this.iconImgUrl=iconImgUrl;
  }

}

export class Forecast{
  periodList;
  
  constructor(){}

  setForecast(periodList?){
    this.periodList = periodList;
  }
}