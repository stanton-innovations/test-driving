import {TestBed, async, ComponentFixture, fakeAsync, tick, flush} from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  // afterAll(async(() => {
  //   TestBed.resetTestingModule();
  // }));
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  describe('sub', () => {
    let expected;
    beforeEach(() => {
      expected = {test: 'test'};
    });
    it('sets data', fakeAsync(() => {
      app.setTinker(expected).then(() => {
        expect(app.tinker).toEqual(expected);
      });
      tick(1100);
    }));
    it(`should have as title 'app'`, fakeAsync(() => {
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', () => {
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    });
  });
});
