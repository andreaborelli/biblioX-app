import { Component } from '@angular/core';
import { BookLogo } from '../../../shared/components/book-logo/book-logo';
import { BookSlogan } from '../../../shared/components/book-slogan/book-slogan';

@Component({
  selector: 'bx-header',
  imports: [BookLogo, BookSlogan],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

    isSticky: boolean = false;


}
