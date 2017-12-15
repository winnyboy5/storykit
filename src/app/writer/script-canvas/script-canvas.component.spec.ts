import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCanvasComponent } from './script-canvas.component';

describe('ScriptCanvasComponent', () => {
  let component: ScriptCanvasComponent;
  let fixture: ComponentFixture<ScriptCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
