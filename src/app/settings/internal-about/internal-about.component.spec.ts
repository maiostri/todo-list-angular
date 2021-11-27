import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAboutComponent } from './internal-about.component';

describe('InternalAboutComponent', () => {
  let component: InternalAboutComponent;
  let fixture: ComponentFixture<InternalAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
