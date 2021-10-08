import { Component, OnInit } from '@angular/core';
import { Collection } from '../../../models/collection.model'
import { CollectionsService } from 'src/app/services/collections.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public collectionsService: CollectionsService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onSubmit(){
    var toAdd: Collection;
    toAdd = {
      name: this.collectionsService.form.value.name,
      description: this.collectionsService.form.value.description,
    }
    this.collectionsService.createCollection(toAdd);
  }

  uploadFileExplore(event: any) {
    const file = event.target.files[0];
    const filePath = '/collections/' + this.collectionsService.form.value.name;
    const task = this.storage.upload(filePath, file);
  }


}
