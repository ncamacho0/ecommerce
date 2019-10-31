import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-allowed',
  template: `
    <p>
      not allowed!
    </p>
  `,
  styles: []
})
export class NotAllowed implements OnInit {

  constructor() { }
  ngOnInit() {}

}
