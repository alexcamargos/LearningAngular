import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAuthorComponent } from './featured-author.component';

describe('FeaturedAuthorComponent', () => {
  let component: FeaturedAuthorComponent;
  let fixture: ComponentFixture<FeaturedAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
