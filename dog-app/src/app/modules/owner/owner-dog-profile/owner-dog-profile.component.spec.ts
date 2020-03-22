import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDogProfileComponent } from './owner-dog-profile.component';

describe('OwnerDogProfileComponent', () => {
  let component: OwnerDogProfileComponent;
  let fixture: ComponentFixture<OwnerDogProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDogProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDogProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
