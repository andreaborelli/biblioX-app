import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLogo } from './book-logo';

describe('BookLogo', () => {
  let component: BookLogo;
  let fixture: ComponentFixture<BookLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
