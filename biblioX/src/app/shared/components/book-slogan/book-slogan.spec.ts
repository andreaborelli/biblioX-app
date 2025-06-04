import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSlogan } from './book-slogan';

describe('BookSlogan', () => {
  let component: BookSlogan;
  let fixture: ComponentFixture<BookSlogan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSlogan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSlogan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
