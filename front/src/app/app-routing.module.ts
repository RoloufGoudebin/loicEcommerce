import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './admin/collections/collections.component';
import { HomeComponent } from './admin/home/home.component';
import { CreateComponent as CreateItem } from './admin/items/create/create.component';
import { ItemsComponent } from './admin/items/items.component';
import { CreateComponent as CreateCollection } from './admin/collections/create/create.component';


const routes: Routes = [
  //section admin
  {path:"admin", children: [
    { path:"", component: HomeComponent },
    //subsection items
    { path:"items", children: [
      { path: '', component: ItemsComponent },
      { path: "create", component: CreateItem}
    ]},
    //subsection collection
    { path:"collections", children: [
      {path:"", component: CollectionsComponent},
      {path:"create", component: CreateCollection}
    ]}
  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
