import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WeatherService {

  apiKey:string="91aaa8bf8f2986a097b4a3bd73ec6ccb";

  constructor(private http:Http) { }

  getWeatherByZip(zip:number,units:string){
    let url:string;
    let res:Response;
    url="http://api.openweathermap.org/data/2.5/weather?zip="+zip+"&appid="+this.apiKey+"&units="+units;
    return this.http.get(url)
        .catch((err:Observable<Response>)=>{
          console.log(err);
          return err;
        })
    }

    getWeatherByCity(city:string,units:string){
      let url:string;
      let res:Response;
      url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey+"&units="+units;
      return this.http.get(url)
          .catch((err:Observable<Response>)=>{
            console.log(err);
            return err;
          })
      }

      getWeatherForecastByCity(city:string,units:string){
        let url:string;
        let res:Response;
        url="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+this.apiKey+"&units="+units;
        return this.http.get(url)
            .catch((err:Observable<Response>)=>{
              console.log(err);
              return err;
            })
        }
}
