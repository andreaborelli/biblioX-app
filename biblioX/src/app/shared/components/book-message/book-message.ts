import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-book-message',
  standalone: true, // This component is standalone, meaning it can be used without being declared in a module.
  imports: [CommonModule],
  templateUrl: './book-message.html',
  styleUrl: './book-message.scss'
})
export class BookMessage {

  @Input() books: any[] = [];

}
