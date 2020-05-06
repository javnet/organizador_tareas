import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLabelsComponent } from './delete-labels.component';

describe('DeleteLabelsComponent', () => {
  let component: DeleteLabelsComponent;
  let fixture: ComponentFixture<DeleteLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
