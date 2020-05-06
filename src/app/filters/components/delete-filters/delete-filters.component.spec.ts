import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFiltersComponent } from './delete-filters.component';

describe('DeleteFiltersComponent', () => {
  let component: DeleteFiltersComponent;
  let fixture: ComponentFixture<DeleteFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
