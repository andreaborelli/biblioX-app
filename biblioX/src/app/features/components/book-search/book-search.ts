import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bx-book-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.scss'
})
export class BookSearch {


   // Pagination configuration
  currentPage = 1;
  itemsPerPage = 10;

  @Input() searchQuery = '';

  @Output() search = new EventEmitter<string>();
  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() onSearch = new EventEmitter<void>();
  @Output() filtersChanged = new EventEmitter<{ ebooks: boolean; free: boolean; lang: string }>();

  query: string = '';
  onlyEbooks: boolean = false;
  onlyFree: boolean = false;
  language: string = '';

  submitSearch() {
    if (this.query.trim()) {
      this.search.emit(this.query);
    }
  }

  ngOnChanges(): void {
    this.emitFilters();
  }

  emitFilters() {
    this.filtersChanged.emit({
      ebooks: this.onlyEbooks,
      free: this.onlyFree,
      lang: this.language
    });
  }

  onFiltersChange() { // This method is called when any filter changes
    this.emitFilters();
  }

  onQueryChange(value: string) {
    this.searchQuery = value;
    this.searchQueryChange.emit(value);
  }

  triggerSearch() {
    this.onSearch.emit();
    this.searchQuery = '';
  }

  // Full list of books
  books = Array(100).fill(null).map((_, i) => ({
    title: `Book ${i + 1}`,
    author: `Author ${i + 1}`
  }));


  // Calculate how many pages are needed
  get totalPages(): number {
    return Math.ceil(this.books.length / this.itemsPerPage);
  }

  // Returns the books to display based on the current page
  get pagedBooks() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.books.slice(start, start + this.itemsPerPage);
  }

  // Method invoked by the child component when the page changes
  onPageChanged(page: number) {
    this.currentPage = page;
  }

  // Calculates the books to display based on the current page
  get displayedBooks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.books.slice(startIndex, endIndex);
  }

  // Method that is called when the page changes
  onPageChange(page: number) {
    this.currentPage = page;
  }

  // Method to reset filters
  resetFilters(): void {
    this.searchQuery = '';
    this.onlyEbooks = false;
    this.onlyFree = false;
    this.language = '';
  }


}
