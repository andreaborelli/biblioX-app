import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BookService } from './services/book-service';
import { HttpClient } from '@angular/common/http';
import { Header } from './core/components/header/header';
import { BookSearch } from './features/components/book-search/book-search';
import { BookList } from './features/components/book-list/book-list';
import { BookPagination } from './shared/components/book-pagination/book-pagination';
import { Footer } from './core/components/footer/footer';
import { BackToTop } from './core/components/back-to-top/back-to-top';



@Component({
  selector: 'bx-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    BookSearch,
    BookList,
    BookPagination,
    Footer,
    BackToTop,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  @ViewChild(BookSearch) bookSearch!: BookSearch;

  
  title: string = '';
  books: any[] = [];
  searchQuery: string = '';
  searchResultsTitle: string = 'Search Results:';

  sortBy: 'relevance' | 'newest' = 'relevance';

  isLoading: boolean = false;

  currentPage: number = 1;
  maxResult: number = 20;
  totalItems: number = 0;
  totalPages: number = 0;

  filters = {
    ebooks: false,
    free: false,
    lang: ''
  };

  onFiltersChanged(newFilters: { ebooks: boolean; free: boolean; lang: string }) {
    this.filters = newFilters;
    if (this.searchQuery.trim()) {
      this.onSearch(); // automatic search
    }

  }
  constructor(
    private bookService: BookService,
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedBooks = localStorage.getItem('books');
      const savedQuery = localStorage.getItem('searchQuery');
      const savedPage = localStorage.getItem('currentPage');
      const savedTotalPages = localStorage.getItem('totalPages');

      if (savedBooks && savedQuery && savedPage && savedTotalPages) {
        this.books = JSON.parse(savedBooks);
        this.searchQuery = savedQuery;
        this.currentPage = +savedPage;
        this.totalPages = +savedTotalPages;
      }
    }
  }

  onSearch(): void {
    console.log('onSearch triggered with query:', this.searchQuery);
    if (this.searchQuery.trim()) {
      this.currentPage = 1;
      this.fetchBooks(this.currentPage);

    }
  }

  onSortChanged(newSort: string) {
    this.sortBy = newSort as 'relevance' | 'newest'; // cast to the correct type
    this.searchBooks();
  }

  searchBooks() {
    this.bookService.searchBooks(this.searchQuery, this.sortBy).subscribe(response => {
      this.books = response.items || [];

    });
  }
  fetchBooks(page: number): void {
    this.isLoading = true; // Start loading
    const startIndex = (page - 1) * this.maxResult;
    let query = `q=${encodeURIComponent(this.searchQuery)}&startIndex=${startIndex}&maxResults=${this.maxResult}`;

    if (this.filters.ebooks) {
      query += `&filter=ebooks`;
    }

    if (this.filters.free) {
      query += `&filter=free-ebooks`;
    }

    if (this.filters.lang) {
      query += `&langRestrict=${this.filters.lang}`;
    }

    this.http.get(`https://www.googleapis.com/books/v1/volumes?${query}`)
      .subscribe({
        next: (response: any) => {
          this.books = response.items || [];
          this.totalItems = Math.min(response.totalItems || 0, 1000);
          this.totalPages = Math.ceil(this.totalItems / this.maxResult);
          this.currentPage = page;

          localStorage.setItem('books', JSON.stringify(this.books));
          localStorage.setItem('searchQuery', this.searchQuery);
          localStorage.setItem('currentPage', this.currentPage.toString());
          localStorage.setItem('totalPages', this.totalPages.toString());
        },
        error: err => {
          console.error('Errore durante il caricamento dei libri:', err);
        },
        complete: () => {
          this.isLoading = false; // End of loading
        }
      });
  }

  resetApp(): void {
    this.searchQuery = '';
    this.books = [];
    this.searchResultsTitle = '';
    this.currentPage = 1;
    this.totalPages = 0;
    localStorage.clear(); // clear memory
    this.router.navigate(['/']);
    this.bookSearch.resetFilters();
  }
 

}
