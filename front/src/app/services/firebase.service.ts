import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  createItem(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("objects")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getItems() { 
    return this.firestore.collection("items").snapshotChanges();
  }

}
