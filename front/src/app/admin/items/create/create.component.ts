import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public itemsService: ItemsService, private firebaseService: FirebaseService) {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    var toAdd: Item;
    toAdd = {
      name: this.itemsService.form.value.name,
      price: this.itemsService.form.value.price,
      description: this.itemsService.form.value.description,
      quantity: this.itemsService.form.value.quantity,
      collection: this.itemsService.form.value.collection
    }
    this.firebaseService.createItem(toAdd)
  }



}
