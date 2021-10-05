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

  deleteCollection(data: any) {
    return this.firestore
       .collection("collections")
       .doc(data.id)
       .delete();
  }

  /*=====================================================================*/

  /*
  CRUD pour la collection "collections"
  */

  createCategory(data:any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("categories")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getCategories(){
    return this.firestore.collection("categories").snapshotChanges();
  }

  updateCategory(data: any){
    return this.firestore
      .collection("categories")
      .doc(data.id)
      .set(data);
  }

  deleteCategory(data: any){
    return this.firestore
      .collection("categories")
      .doc(data.id)
      .delete();
  }

}
