import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'bx-back-to-top',
  standalone: true, // This component is standalone, meaning it can be used without being declared in a module.
  imports: [CommonModule],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss'
})
export class BackToTop {

  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.showScrollButton = y > window.innerHeight / 2;
  }

  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
