import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bsn-lib-business',
  template: `
    <p>
      lib-business works!
    </p>
    <cor-base-one></cor-base-one>
  `,
  styles: [
  ]
})
export class BusinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
