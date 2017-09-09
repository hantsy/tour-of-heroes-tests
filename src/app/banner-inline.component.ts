import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `<h1>{{title}}</h1>`
})

export class BannerComponent implements OnInit {
  title = 'Test Tour of Heroes';
  constructor() { }

  ngOnInit() { }
}
