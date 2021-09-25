import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { title: "Home", link: "/", dropdown: false },
    { title: "Articles", link: "/admin/articles", dropdown: false },
    { title: "Commandes", link: "/admin/commandes", dropdown: false },
    { title: "Clients", link: "/admin/clients", dropdown: false },
    { title: "Factures", link: "/admin/factures", dropdown: false },
    { title: "Avis", link: "/admin/avis", dropdown: false },
  ]

  constructor() { }

  isNavbarCollapsed = true;

  ngOnInit(): void {
    console.log(this.isNavbarCollapsed);
  }


}
