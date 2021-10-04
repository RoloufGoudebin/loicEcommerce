import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Item } from 'src/app/models/item.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public itemsService: ItemsService, private storage: AngularFireStorage) {

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
    this.itemsService.createItem(toAdd)
  }

  uploadFileExplore(event: any) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const task = this.storage.upload(filePath, file);
  }



}
