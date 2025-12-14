import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creating } from './creating';

describe('Creating', () => {
  let component: Creating;
  let fixture: ComponentFixture<Creating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
