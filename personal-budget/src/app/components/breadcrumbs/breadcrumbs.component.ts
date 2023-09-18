import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() title = 'Title';

  constructor() {}

  ngOnInit(): void {}
}
