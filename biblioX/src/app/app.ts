import { Component } from '@angular/core';
import { Header } from "./core/components/header/header";
import { RouterOutlet } from '@angular/router';
import { BookSearch } from "./features/components/book-search/book-search";
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'bx-root',
  imports: [RouterOutlet, Header, BookSearch, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected title = 'biblioX';
}
