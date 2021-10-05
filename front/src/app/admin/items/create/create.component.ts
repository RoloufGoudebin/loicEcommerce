import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Item } from 'src/app/models/item.model';
import { Category } from 'src/app/models/category.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/models/collection.model';
import { CollectionsService } from 'src/app/services/collections.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  uploadPercent: Observable<number | undefined>;
  profileUrl: Observable<string | null>;
  categories: Category[];
  collections: Collection[]
  num: number;
  sizesAvailable= new Array();
  sizesQtyAvailable= new Array();

  constructor(public itemsService: ItemsService, 
              private storage: AngularFireStorage, 
              private categoriesService: CategoriesService,
              private collectionsService: CollectionsService) {
  }

  ngOnInit(): void {

    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Category
        }
      })
    });

    this.collectionsService.getCollections().subscribe(data => {
      this.collections = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Collection
        }
      })
    })

  }

  onSubmit() {
    var toAdd: Item;
    this.sizesAvailable.push(this.itemsService.form.value.size);
    this.sizesQtyAvailable.push(this.itemsService.form.value.sizeQty);
    toAdd = {
      category: this.itemsService.form.value.category,
      name: this.itemsService.form.value.name,
      price: this.itemsService.form.value.price,
      description: this.itemsService.form.value.description,
      sizes: this.sizesAvailable,
      sizesQty: this.sizesQtyAvailable,
      collection: this.itemsService.form.value.collection,
      img: "items/" + this.itemsService.form.value.name + "/0"
    }
    this.itemsService.createItem(toAdd);
    console.log(this.categories)
  }

  uploadFileExplore(event: any) {
    const file = event.target.files[0];
    const filePath = 'items/' + this.itemsService.form.value.name + "/" + this.num;
    const task = this.storage.upload(filePath, file);
    this.num = this.num + 1;
    console.log(this.num);
    this.uploadPercent = task.percentageChanges();
  }

  addSize(){
    this.sizesAvailable.push(this.itemsService.form.value.size);
    this.sizesQtyAvailable.push(this.itemsService.form.value.sizeQty);
  }
}
