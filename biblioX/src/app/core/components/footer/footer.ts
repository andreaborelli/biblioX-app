import { Component } from '@angular/core';

@Component({
  selector: 'bx-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  author: string = 'Andrea Borelli';

  currentYear: number = new Date().getFullYear();

}
