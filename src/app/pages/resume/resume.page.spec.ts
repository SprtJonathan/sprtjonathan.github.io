import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ResumePage } from './resume.page';

describe('ResumePage', () => {
  let component: ResumePage;
  let fixture: ComponentFixture<ResumePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePage]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute the correct age', () => {
    const now = new Date();
    let age = now.getFullYear() - 1999;
    const m = now.getMonth() - 1;
    if (m < 0 || (m === 0 && now.getDate() < 14)) age--;
    expect(component.age()).toBe(age);
  });
});
