import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-book-slogan',
  standalone: true,
  imports: [],
  templateUrl: './book-slogan.html',
  styleUrl: './book-slogan.scss'
})
export class BookSlogan {

  @Input() text: string = '';

}
