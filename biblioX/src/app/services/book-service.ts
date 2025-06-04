import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  private books: Book[] = [];
 
    constructor(private http: HttpClient) { }

    searchBooks(query: string, sortBy: 'relevance' | 'newest' = 'relevance'): Observable<any> {
    const url = `${this.API_URL}?q=${encodeURIComponent(query)}&orderBy=${sortBy}&maxResults=20`;
    return this.http.get(url);
  }

  // Method to save books to the books property
  setBooks(books: Book[]): void {
    this.books = books;
  }

  // Method to get the saved books
  getBooks(): Book[] {
    return this.books;
  }

}
