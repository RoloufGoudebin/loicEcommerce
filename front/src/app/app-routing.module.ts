import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './admin/home/home.component';
import { CreateComponent } from './admin/items/create/create.component';
import { ItemsComponent } from './admin/items/items.component';


const routes: Routes = [
  {path:"admin", children: [
    { path:"", component: HomeComponent },
    { path:"items", children: [
      { path: '', component: ItemsComponent },
      { path: "create", component: CreateComponent}
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
