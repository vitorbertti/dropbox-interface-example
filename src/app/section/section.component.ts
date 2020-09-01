import { Component, OnInit, Input } from '@angular/core';

import { faDropbox } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() variant = '';
  @Input() title = '';
  @Input() description = '';
  @Input() first = '';
  faDropbox = faDropbox;
  buttonVariant: number;
  buttonText = '';

  constructor() {}

  ngOnInit(): void {
    this.buttonVariant = Math.round(Math.random());

    if (this.buttonVariant === 0) {
      this.buttonText = 'Acessar';
    } else {
      this.buttonText = 'Interagir';
    }
  }
}
