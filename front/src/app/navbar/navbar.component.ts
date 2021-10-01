import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { title: "Home", link: "/", dropdown: false },
    { title: "Collections", link: "/formations", dropdown: false },
    { title: "Phantomania x Loic", link: "/blog", dropdown: false },
    { title: "Mon compte", link: "/liens", dropdown: false },
    { title: "Mon panier", link: "/blog", dropdown: false },
  ]

  constructor() { }

  isNavbarCollapsed = true;

  ngOnInit(): void {
    console.log(this.isNavbarCollapsed);
  }

}