import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/collection.model';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {


  collections : any[];

  constructor(public collectionsService: CollectionsService) { }


  ngOnInit(): void {
    this.collectionsService.getCollections().subscribe(data => {
      this.collections = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Collection
        }
      })
    });
  }

  onSubmit(){
  }

}
