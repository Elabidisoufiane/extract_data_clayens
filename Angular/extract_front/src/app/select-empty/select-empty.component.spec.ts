import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmptyComponent } from './select-empty.component';

describe('SelectEmptyComponent', () => {
  let component: SelectEmptyComponent;
  let fixture: ComponentFixture<SelectEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectEmptyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
