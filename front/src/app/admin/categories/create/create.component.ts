import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var toAdd: Category;
    toAdd = {
      name: this.categoriesService.form.value.name
    }
    this.categoriesService.createCategory(toAdd);
  }



}
