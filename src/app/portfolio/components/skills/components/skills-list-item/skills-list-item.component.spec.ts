import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListItemComponent } from './skills-list-item.component';

describe('SkillsListItemComponent', () => {
  let component: SkillsListItemComponent;
  let fixture: ComponentFixture<SkillsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
