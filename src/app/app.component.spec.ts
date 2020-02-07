import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";

@Component({selector: 'app-alert', template: ''})
class AlertStubComponent {}
@Component({selector: 'app-toolbar', template: ''})
class ToolbarStubComponent {}
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AlertStubComponent,
        ToolbarStubComponent,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'budget-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('budget-ui');
  });
});
