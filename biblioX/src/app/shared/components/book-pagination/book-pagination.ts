import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bx-book-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-pagination.html',
  styleUrl: './book-pagination.scss'
})
export class BookPagination {

  @Input() books: any[] = [];

  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    const totalVisible = 5;
    const pages: number[] = [];

    let start = Math.max(1, this.currentPage - Math.floor(totalVisible / 2));
    let end = start + totalVisible - 1;

    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - totalVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

}
