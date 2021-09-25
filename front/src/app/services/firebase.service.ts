import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  createItem(data: Item) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("items")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getItems() {
    return this.firestore.collection("items").snapshotChanges();
  }

  updateItem(data: Item) {
    return this.firestore
      .collection("items")
      .doc(data.id)
      .set(data);
  }

  deleteItem(data: Item) {
    return this.firestore
       .collection("items")
       .doc(data.id)
       .delete();
  }

}
