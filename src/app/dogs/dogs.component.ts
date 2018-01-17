import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  private dogs:any[]=null;
  private breed_random_image;

  constructor(private dogsService:DogsService) { }
  
  ngOnInit() {
  }

  getAllDogs(){
    console.log("Got request");
    this.dogsService.getAllDogs().subscribe(
      data=>this.dogs = data.message
    );
  }

  getBreedRandomImage(breed){
    let image:string;
    this.dogsService.getBreedRandomImage(breed).subscribe(
      data=>image=data.message
    );
  }
}
