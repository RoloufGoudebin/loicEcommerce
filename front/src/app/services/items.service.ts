import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";


import { Item } from '../models/item.model'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl('')
  })

}
