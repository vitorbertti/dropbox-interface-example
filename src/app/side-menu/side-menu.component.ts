import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  constructor() {}

  isActive = false;
  scrollOpen = '';

  open = this.isActive ? 'open' : '';

  onScroll() {
    let scroll = window.scrollY;
    this.isActive = false;

    this.scrollOpen = scroll <= 300 ? 'scrollOpen' : '';

    console.log(this.scrollOpen);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }
}
