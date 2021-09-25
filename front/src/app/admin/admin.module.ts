import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { CreateComponent as CreateItems } from './items/create/create.component';
import { CreateComponent as CreateCollection} from './collections/create/create.component'
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionsComponent } from './collections/collections.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemsComponent,
    CreateItems,
    CollectionsComponent,
    CreateCollection
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
