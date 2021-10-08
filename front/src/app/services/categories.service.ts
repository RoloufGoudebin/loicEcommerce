import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firebaseService: FirebaseService) { }

  form = new FormGroup({
    name: new FormControl('')
  })

  createCategory(data: any){
    this.firebaseService.createCategory(data);
  }

  getCategories(){
    return this.firebaseService.getCategories();
  }
}
