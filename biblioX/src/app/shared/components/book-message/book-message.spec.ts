import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMessage } from './book-message';

describe('BookMessage', () => {
  let component: BookMessage;
  let fixture: ComponentFixture<BookMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
