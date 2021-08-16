import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WomenComponent } from './women.component';

describe('WomenComponent', () => {
  let component: WomenComponent;
  let fixture: ComponentFixture<WomenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
