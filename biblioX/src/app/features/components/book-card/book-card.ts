import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookDetails } from '../book-details/book-details';

@Component({
  selector: 'bx-book-card',
  standalone: true,
  imports: [CommonModule, BookDetails],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {

  @Input() book: any;

  MoreDetails: string = 'More Details';
  BuyNow: string = 'Buy Now';
  selectedBook: any = null;
  isModalVisible = false;

  constructor() { }

  showDetails(book: any) {
    if (this.selectedBook === book && this.isModalVisible) {
      // If the same book is clicked and the modal is already visible, close the modal first
      this.isModalVisible = false;
      setTimeout(() => {
        this.selectedBook = book;
        this.isModalVisible = true;
      }, 0);
    } else {
      this.selectedBook = book;
      this.isModalVisible = true;
    }
  }

}
