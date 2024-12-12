import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeMenuComponent } from './moje-menu.component';

describe('MojeMenuComponent', () => {
  let component: MojeMenuComponent;
  let fixture: ComponentFixture<MojeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MojeMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
