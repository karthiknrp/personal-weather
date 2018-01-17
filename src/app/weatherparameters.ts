import { Injectable } from '@angular/core';

@Injectable()
export class WeatherParameters{
    perc_rep="%";
    deg_rep="o";
    temp_type:string;
    wind_speed_rep:string;
    
    constructor(){ 
    }

    setWeatherParameters(units:string){
        if (units=="metric"){
            this.temp_type="C";
            this.wind_speed_rep="meters/sec";
        } else if (units=="imperial"){
            this.temp_type="F";
            this.wind_speed_rep="miles/hr";
        } else {
            this.temp_type="K";
            this.wind_speed_rep="meter/sec";
        }
    }
}