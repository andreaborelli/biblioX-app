import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeDescriptionPipe } from '../../../pipes/safe-description-pipe';
import { TruncatePipe } from '../../../pipes/truncate-pipe';

@Component({
  selector: 'bx-book-details',
  standalone: true,
  imports: [CommonModule, SafeDescriptionPipe, TruncatePipe],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss'
})
export class BookDetails {

  @Input() book: any;
  @Input() visible = false;

  BookDetails: string = 'Book Details';

  close() {
    this.visible = false;
  }

  openBookInfo(url: string) {
    window.open(url, '_blank');
  }

}
