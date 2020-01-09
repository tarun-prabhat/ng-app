import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestserverComponent } from './testserver.component';

describe('TestserverComponent', () => {
  let component: TestserverComponent;
  let fixture: ComponentFixture<TestserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
