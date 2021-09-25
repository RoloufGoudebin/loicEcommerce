import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";


import { Item } from '../models/item.model'
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private firebaseService: FirebaseService) { }

  createItem(data: any){
    this.firebaseService.createItem(data);
  }

  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
    collection: new FormControl('')
  })

}
