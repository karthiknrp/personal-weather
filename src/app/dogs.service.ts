import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DogsService {

  constructor(private http:Http) {}

  getAllDogs(){
    return this.http.get('https://dog.ceo/api/breeds/list')
                .map((res:Response) => res.json());
  }

  getBreedRandomImage(breed){
    let url:string="https://dog.ceo/api/breed/";
    return this.http.get(url+breed+"/images/random")
              .map((res:Response)=>res.json());
  }
}
