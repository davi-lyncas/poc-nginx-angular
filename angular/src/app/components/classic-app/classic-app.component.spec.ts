import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicAppComponent } from './classic-app.component';

describe('ClassicAppComponent', () => {
  let component: ClassicAppComponent;
  let fixture: ComponentFixture<ClassicAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
