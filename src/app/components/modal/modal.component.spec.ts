import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close when closeModal is called', () => {
    spyOn(component.close, 'emit');
    component.closeModal();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should emit close when clicking overlay', () => {
    spyOn(component, 'closeModal');
    const overlay = fixture.nativeElement.querySelector('.modal--overlay');
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: overlay });
    Object.defineProperty(event, 'currentTarget', { value: overlay });
    overlay.dispatchEvent(event);
    expect(component.closeModal).toHaveBeenCalled();
  });

  it('should not close when clicking inside modal', () => {
    spyOn(component, 'closeModal');
    const modal = fixture.nativeElement.querySelector('.modal');
    const overlay = fixture.nativeElement.querySelector('.modal--overlay');
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: modal });
    Object.defineProperty(event, 'currentTarget', { value: overlay });
    overlay.dispatchEvent(event);
    expect(component.closeModal).not.toHaveBeenCalled();
  });
});
