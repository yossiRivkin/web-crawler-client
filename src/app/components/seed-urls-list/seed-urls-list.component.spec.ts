import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedUrlsListComponent } from './seed-urls-list.component';

describe('SeedUrlsListComponent', () => {
  let component: SeedUrlsListComponent;
  let fixture: ComponentFixture<SeedUrlsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeedUrlsListComponent]
    });
    fixture = TestBed.createComponent(SeedUrlsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
