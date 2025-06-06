import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookLogo } from '../../../shared/components/book-logo/book-logo';
import { BookSlogan } from '../../../shared/components/book-slogan/book-slogan';


@Component({
  selector: 'bx-header',
  standalone: true,
  imports: [CommonModule, BookLogo, BookSlogan,],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  isSticky: boolean = false;

  @Input() title: string = 'BiblioX';

  sloganText: string = `
  <em>"Discover. Read. Grow."</em><br>
  <em>"All the books you seek, in one place"</em>
`;

  @Output() resetApp = new EventEmitter<void>();

  triggerReset() {
    this.resetApp.emit();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 50;
  }
}
