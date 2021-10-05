import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  cards=[
    {
      title: "Objets",
      description: "Ajouter, modifier ou supprimer les différents objets mis en vente",
      image :"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
      link : "/admin/items"
    },
    {
      title: "Collection",
      description: "Ajouter, modifier ou supprimer les différentes collections",
      image :"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
      link : "/admin/collections"
    },
    {
      title: "Commandes",
      description: "Afficher les différentes commandes, cloturées, en cours, ...",
      image :"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
      link : "/admin/commandes"
    },
    { 
      title: "Chiffres",
      description: "Ajouter, modifier ou supprimer les différentes collections",
      image :"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
      link: "/admin/resumes"
    }

  ]

  ngOnInit(): void {
  }

}
