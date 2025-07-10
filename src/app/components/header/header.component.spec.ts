import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu', () => {
    expect(component.menuOpen()).toBeFalse();
    component.toggleMenu();
    expect(component.menuOpen()).toBeTrue();
  });

  it('should toggle theme', () => {
    const initial = component.isDarkTheme();
    component.toggleTheme();
    expect(component.isDarkTheme()).not.toBe(initial);
  });
});
