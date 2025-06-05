import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-book-logo',
  standalone: true,
  imports: [],
  templateUrl: './book-logo.html',
  styleUrl: './book-logo.scss'
})
export class BookLogo {

  @Input() title: string = 'BiblioX';

}
