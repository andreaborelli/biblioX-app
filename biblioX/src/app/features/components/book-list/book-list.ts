import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { BookMessage } from '../../../shared/components/book-message/book-message';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'bx-book-list',
  standalone: true,  // / This component is standalone, meaning it can be used without being declared in a module.
  imports: [CommonModule, FormsModule, BookCard, BookMessage],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {

  currentPage = 1;
  totalPages = 0;

  sortBy: 'relevance' | 'newest' = 'relevance';

  @Input() books: any[] = [];
  @Input() searchResultsTitle = '';
  @Output() sortByChange = new EventEmitter<string>();

  onSortChange() {
    this.sortByChange.emit(this.sortBy); // notify the father
  }

  ngOnChanges() {
    this.totalPages = Math.ceil(this.books.length / 10);
  }
}
