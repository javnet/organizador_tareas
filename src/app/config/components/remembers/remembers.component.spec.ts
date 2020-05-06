import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemembersComponent } from './remembers.component';

describe('RemembersComponent', () => {
  let component: RemembersComponent;
  let fixture: ComponentFixture<RemembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
