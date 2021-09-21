import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { title: "Home", link: "/", dropdown: false },
    { title: "Tarifs", link: "/tarifs", dropdown: false },
    {
      title: "Nos activités", link: "/activites", dropdown: true,
      navs:
        [
          { title: "Contrôles", link: "/activites/controles" },
          { title: "Consultance", link: "/activites/consultance" },
          { title: "Coordination", link: "/activites/coordination" }
        ]
    },
    { title: "Formations", link: "/formations", dropdown: false },
    { title: "Liens", link: "/liens", dropdown: false },
    { title: "Blog", link: "/blog", dropdown: false },
    { title: "Contact", link: "/contact", dropdown: false }
  ]

  constructor() { }

  isNavbarCollapsed = true;

  ngOnInit(): void {
    console.log(this.isNavbarCollapsed);
  }

}