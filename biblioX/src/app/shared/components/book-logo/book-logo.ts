import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-book-logo',
  imports: [],
  templateUrl: './book-logo.html',
  styleUrl: './book-logo.scss'
})
export class BookLogo {

  @Input() title: string = 'BiblioX';

}
