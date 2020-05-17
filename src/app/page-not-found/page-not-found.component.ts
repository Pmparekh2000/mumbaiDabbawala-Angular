import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3 class="mt-5 pt-5">
      Page Not Found Incorrect Path!!
    </h3>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
  .h3{
    font-family: 'Spicy Rice', cursive;
  }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
