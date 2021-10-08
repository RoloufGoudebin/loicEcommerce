import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import firebase from 'firebase/compat/app';



import { AuthService } from './services/auth.service';

import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ItemsComponent } from './admin/items/items.component';
import { CollectionsComponent } from './admin/collections/collections.component';
import { CreateComponent as CreateItems } from './admin/items/create/create.component';
import { CreateComponent as CreateCollection} from './admin/collections/create/create.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CommandesComponent } from './admin/commandes/commandes.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CreateComponent } from './admin/categories/create/create.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
]

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    ItemsComponent,
    CollectionsComponent,
    HomeComponent,
    CreateItems,
    CreateCollection,
    DashboardComponent,
    CommandesComponent,
    CategoriesComponent,
    CreateComponent

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MDBBootstrapModulesPro.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule
  ],
  bootstrap:[
    AppComponent
  ],
  providers: [
    MDBSpinningPreloader,
    AuthService
  ]
})
export class AppModule { }
