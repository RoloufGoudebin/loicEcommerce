import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Item } from 'src/app/models/item.model';
import { Category } from 'src/app/models/category.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  uploadPercent: Observable<number | undefined>;
  profileUrl: Observable<string | null>;
  categories: Category[];
  num: number;

  constructor(public itemsService: ItemsService, private storage: AngularFireStorage, private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.num = 0;
    const ref = this.storage.ref('items/Casquette');
    this.profileUrl = ref.getDownloadURL();
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Category
        }
      })
    });

  }

  onSubmit() {
    var toAdd: Item;
    toAdd = {
      category: this.itemsService.form.value.category,
      name: this.itemsService.form.value.name,
      price: this.itemsService.form.value.price,
      description: this.itemsService.form.value.description,
      quantity: this.itemsService.form.value.quantity,
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
}
