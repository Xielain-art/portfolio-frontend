import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexListItemComponent } from './flex-list-item.component';

describe('FlexListItemComponent', () => {
  let component: FlexListItemComponent;
  let fixture: ComponentFixture<FlexListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
