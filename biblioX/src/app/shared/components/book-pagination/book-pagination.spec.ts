import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPagination } from './book-pagination';

describe('BookPagination', () => {
  let component: BookPagination;
  let fixture: ComponentFixture<BookPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
