import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
