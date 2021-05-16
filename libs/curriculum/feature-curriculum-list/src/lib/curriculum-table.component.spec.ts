import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumTableComponent } from './curriculum-table.component';

describe('CurriculumTableComponent', () => {
  let component: CurriculumTableComponent;
  let fixture: ComponentFixture<CurriculumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
