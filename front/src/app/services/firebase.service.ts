import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }


  /*
  CRUD pour la collection "items" 
  */

  createItem(data: any) {
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

  updateItem(data: any) {
    return this.firestore
      .collection("items")
      .doc(data.id)
      .set(data);
  }

  deleteItem(data: any) {
    return this.firestore
       .collection("items")
       .doc(data.id)
       .delete();
  }

  /*=====================================================================*/

  /*
  CRUD pour la collection "collections"
  */

  createCollection(data:any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("collections")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getCollections() {
    return this.firestore.collection("collections").snapshotChanges();
  }

  updateCollections(data: any) {
    return this.firestore
      .collection("collections")
      .doc(data.id)
      .set(data);
  }

  deleteCollections(data: any) {
    return this.firestore
       .collection("collections")
       .doc(data.id)
       .delete();
  }

  /*=====================================================================*/

}
