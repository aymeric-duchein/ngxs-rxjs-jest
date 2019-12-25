import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SortComponent} from './sort.component';
import {By} from '@angular/platform-browser';
import {MockHelper, MockModule} from 'ng-mocks';
import {MatButtonModule, MatIconModule, MatMenuModule, MatMenuTrigger} from '@angular/material';
import {NgxsModule, Store} from '@ngxs/store';
import {IssueSortCriteria, SortDirection, SortKey} from '@src/app/core/issue/issue.model';
import {Subject} from 'rxjs';
import {mockSelect} from '@ngxs-labs/testing/jest';
import {IssueState} from '@src/app/core/issue/issue.state';
import {SortOptionClick} from '@src/app/listing/listing.actions';

describe('FilterComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;
  let store: Store;
  let getSortCriteria$: Subject<IssueSortCriteria>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortComponent],
      imports: [
        NgxsModule.forRoot(),
        MockModule(MatButtonModule),
        MockModule(MatMenuModule),
        MockModule(MatIconModule),
      ]
    });

    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');

    getSortCriteria$ = mockSelect(IssueState.getSortCriteria);
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should trigger menu opening', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    const menuTrigger = MockHelper.getDirective(btn, MatMenuTrigger);
    expect(menuTrigger).not.toBeNull();
  });

  test.each([
    ['DATE', SortKey.DATE, 1],
    ['NAME', SortKey.NAME, 2],
    ['STATUS', SortKey.STATUS, 3],
    ['NONE', SortKey.NONE, 4],
  ])('should trigger sort by %s', (_, criteria, index) => {
    const btn = fixture.debugElement.query(By.css(`mat-menu>button:nth-of-type(${index})`));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new SortOptionClick(criteria));
  });

  test.each([
    ['DATE', 'ASC', SortKey.DATE, SortDirection.ASC, 1],
    ['DATE', 'DESC', SortKey.DATE, SortDirection.DESC, 1],
    ['NAME', 'ASC', SortKey.NAME, SortDirection.ASC, 2],
    ['NAME', 'DESC', SortKey.NAME, SortDirection.DESC, 2],
    ['STATUS', 'ASC', SortKey.STATUS, SortDirection.ASC, 3],
    ['STATUS', 'DESC', SortKey.STATUS, SortDirection.DESC, 3],
  ])('should display sort by %s %s', (_, __, criteria, direction, index) => {
    getSortCriteria$.next({by: criteria, direction});
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css(`mat-menu>button:nth-of-type(${index})>mat-icon`));
    expect(icon).not.toBeNull();
    expect(icon.nativeElement.innerHTML).toContain(direction ? 'arrow_drop_up' : 'arrow_drop_down');
  });
});
