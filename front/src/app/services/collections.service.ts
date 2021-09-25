import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor() { }

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  })

}
