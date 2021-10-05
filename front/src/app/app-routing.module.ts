import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './admin/collections/collections.component';
import { HomeComponent as HomeAdmin } from './admin/home/home.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent as CreateItem } from './admin/items/create/create.component';
import { ItemsComponent } from './admin/items/items.component';
import { CreateComponent as CreateCollection } from './admin/collections/create/create.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);



const routes: Routes = [
  //section admin
  {path:"", component: HomeComponent, pathMatch: 'full'},
  {path:"login", component: LoginComponent},
  {path:"admin", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  children: [
    { path:"", component: DashboardComponent },
    //subsection items
    { path:"items", children: [
      { path: '', component: ItemsComponent },
      { path: "create", component: CreateItem}
    ]},
    //subsection collections
    { path:"collections", children: [
      {path:"", component: CollectionsComponent},
      {path:"create", component: CreateCollection}
    ]}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
