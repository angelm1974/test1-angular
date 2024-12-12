import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafelekComponent } from './kafelek.component';

describe('KafelekComponent', () => {
  let component: KafelekComponent;
  let fixture: ComponentFixture<KafelekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafelekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KafelekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
