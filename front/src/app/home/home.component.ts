import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { Category } from '../models/category.model';

import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsList: Item[];
  categorieslist: Category[];
  toCreate: Item


  constructor(private firebaseService: FirebaseService) {
  }


  ngOnInit(): void {
    this.getItemsList();

  }

  
  
  getItemsList(){
    this.firebaseService.getItems().subscribe(data => {
      this.itemsList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        }
      })
      console.log(this.itemsList[0].name)
    });
  }

}