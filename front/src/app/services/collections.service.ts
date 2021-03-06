import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private firebaseService: FirebaseService) { }

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  })

  createCollection(data: any){
    this.firebaseService.createCollection(data);
  }

  getCollections(){
    return this.firebaseService.getCollections()
  }

}
