import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportsByCampusComponent } from './view-reports-by-campus.component';

describe('ViewReportsByCampusComponent', () => {
  let component: ViewReportsByCampusComponent;
  let fixture: ComponentFixture<ViewReportsByCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReportsByCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReportsByCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
