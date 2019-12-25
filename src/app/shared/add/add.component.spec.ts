import {AddComponent} from '@src/app/shared/add/add.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {MatButtonModule, MatIconModule, MatMenuModule, MatMenuTrigger} from '@angular/material';
import {MockHelper, MockModule} from 'ng-mocks';
import {By} from '@angular/platform-browser';
import {AddHttpIssueBtnClick, AddIssueBtnClick} from '@src/app/core/header/header.action';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [
        NgxsModule.forRoot(),
        MockModule(MatButtonModule),
        MockModule(MatMenuModule),
        MockModule(MatIconModule),
      ]
    });
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  test('should trigger menu opening', () => {
    const icon = fixture.debugElement.query(By.css('mat-icon'));
    const menuTrigger = MockHelper.getDirective(icon, MatMenuTrigger);
    expect(menuTrigger).not.toBeNull();
  });

  test('should display two buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toEqual(2);
  });

  test('should add a new issue', () => {
    const addIssue = fixture.debugElement.query(By.css('button:nth-of-type(1)'));
    expect(addIssue).not.toBeNull();
    addIssue.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(AddIssueBtnClick));
    expect(store.dispatch).toHaveBeenCalledWith(new AddIssueBtnClick());
  });

  test('should add a new http issue', () => {
    const addHttpIssue = fixture.debugElement.query(By.css('button:nth-of-type(2)'));
    expect(addHttpIssue).not.toBeNull();
    addHttpIssue.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(AddHttpIssueBtnClick));
    expect(store.dispatch).toHaveBeenCalledWith(new AddHttpIssueBtnClick());
  });
});



