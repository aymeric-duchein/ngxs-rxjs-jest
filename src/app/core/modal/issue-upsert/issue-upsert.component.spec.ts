import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IssueUpsertComponent} from './issue-upsert.component';
import {MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {NgxsModule, Store} from '@ngxs/store';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelect,
  MatSelectModule
} from '@angular/material';
import {Issue, IssueColor, IssueStatus} from '@src/app/core/issue/issue.model';
import {MockedComponent, MockModule} from 'ng-mocks';
import {UserState} from '@src/app/core/user/user.state';
import {advanceTo, clear} from 'jest-date-mock';
import * as uuid from 'uuid';
import {By} from '@angular/platform-browser';
import {getIssueColors} from '@src/app/core/issue/issue.utils';
import {MOCK_DIALOG_REF_PROVIDER} from '@mocks/provider.mock';

describe('IssueUpsertComponent', () => {
  let component: IssueUpsertComponent;
  let fixture: ComponentFixture<IssueUpsertComponent>;
  let dialogRef: MatDialogRef<IssueUpsertComponent>;

  const currentDate = new Date(2018, 11, 3, 11, 0, 0);
  const initTestBed = (data: { issue: Issue } | null) => {
    TestBed.configureTestingModule({
      declarations: [IssueUpsertComponent],
      imports: [
        NgxsModule.forRoot(),
        ReactiveFormsModule,
        MockModule(MatDialogModule),
        MockModule(MatIconModule),
        MockModule(MatInputModule),
        MockModule(MatFormFieldModule),
        MockModule(MatOptionModule),
        MockModule(MatButtonModule),
        MockModule(MatListModule),
        MockModule(MatSelectModule),
      ],
      providers: [
        MOCK_DIALOG_REF_PROVIDER,
        {
          provide: MAT_DIALOG_DATA,
          useValue: data
        }
      ]
    });
    dialogRef = TestBed.get(MatDialogRef);
    jest.spyOn(TestBed.get(Store), 'selectSnapshot').mockImplementation((selector) => {
      if (selector === UserState.getUserName) {
        return 'fake user';
      }
      if (selector === UserState.getAvatarUrl) {
        return 'fake_avatar_url';
      }
    });

    advanceTo(currentDate);
    uuid.v4 = jest.fn().mockReturnValue('fake-id');
    fixture = TestBed.createComponent(IssueUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };
  describe('with issue data', () => {
    beforeEach(() => {
      initTestBed({issue: MOCK_TODO_ISSUE});
    });

    test('should create', () => {
      expect(component).toBeTruthy();
    });

    test('should init form with correct values', () => {
      const nameInput = fixture.debugElement.query(By.css('form>mat-form-field:nth-of-type(1)>input'));
      expect(nameInput.nativeElement.value).toEqual(MOCK_TODO_ISSUE.name);
      const descriptionInput = fixture.debugElement.query(By.css('form>mat-form-field:nth-of-type(2)>textarea'));
      expect(descriptionInput.nativeElement.value).toEqual(MOCK_TODO_ISSUE.description);
      const colorSelect = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(MOCK_TODO_ISSUE.color) + 1})>mat-icon`)
      );
      expect(colorSelect).not.toBeNull();
    });

    test('should init header with correct values', () => {
      const authorName = fixture.debugElement.query(By.css('.header-author>span'));
      expect(authorName.nativeElement.innerHTML).toContain(MOCK_TODO_ISSUE.author);
      const date = fixture.debugElement.query(By.css('.header-date>span'));
      expect(date.nativeElement.innerHTML).toContain(MOCK_TODO_ISSUE.transformedDate);
      const avatar = fixture.debugElement.query(By.css('.header>img'));
      expect((avatar.nativeElement as HTMLImageElement).src).toContain(MOCK_TODO_ISSUE.authorAvatar);
    });

    test('should update selected color', () => {
      const newColorDiv = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color2) + 1})`)
      );
      newColorDiv.triggerEventHandler('click', {});

      fixture.detectChanges();
      const selectedColor = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color2) + 1})>mat-icon`)
      );
      expect(selectedColor).not.toBeNull();
    });

    test('should cancel edit', () => {
      const cancelBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(1)'));
      cancelBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith();
    });

    test('should save edit', () => {
      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith(MOCK_TODO_ISSUE);
    });


    test('should save color edit', () => {
      const newColorDiv = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color2) + 1})`)
      );
      newColorDiv.triggerEventHandler('click', {});

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...MOCK_TODO_ISSUE,
        color: IssueColor.color2,
      });
    });

    test('should save name edit', () => {
      const nameInput = fixture.debugElement.query(
        By.css(`form>mat-form-field:nth-of-type(1)>input`)
      );
      nameInput.nativeElement.value = 'new name';
      nameInput.nativeElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...MOCK_TODO_ISSUE,
        name: 'new name',
      });
    });

    test('should save description edit', () => {
      const descriptionInput = fixture.debugElement.query(
        By.css(`form>mat-form-field:nth-of-type(2)>textarea`)
      );
      descriptionInput.nativeElement.value = 'new description';
      descriptionInput.nativeElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...MOCK_TODO_ISSUE,
        description: 'new description',
      });
    });

    test('should save status edit', () => {
      const statusSelect: MockedComponent<MatSelect> = fixture.debugElement.query(By.css('mat-select')).componentInstance;
      statusSelect.__simulateChange(IssueStatus.IN_PROGRESS);

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...MOCK_TODO_ISSUE,
        status: IssueStatus.IN_PROGRESS,
      });
    });

    test('should display status list', () => {
      const matOptions = fixture.debugElement.queryAll(By.css('mat-option'));
      expect(matOptions.length).toBe(3);
      expect(matOptions.map(option => option.componentInstance.value)).toEqual([
        IssueStatus.TODO, IssueStatus.IN_PROGRESS, IssueStatus.DONE
      ]);
    });
  });

  describe('without issue data', () => {
    const defaultExpectedIssue = {
      author: 'fake user',
      authorAvatar: 'fake_avatar_url',
      id: 'fake-id',
      date: currentDate.toISOString(),
      name: '',
      description: '',
      status: IssueStatus.TODO,
      color: IssueColor.color15,
    };

    beforeEach(() => {
      initTestBed(null);
    });

    test('should create', () => {
      expect(component).toBeTruthy();
    });

    test('should init form with correct values', () => {
      const nameInput = fixture.debugElement.query(By.css('form>mat-form-field:nth-of-type(1)>input'));
      expect(nameInput.nativeElement.value).toEqual('');
      const descriptionInput = fixture.debugElement.query(By.css('form>mat-form-field:nth-of-type(2)>textarea'));
      expect(descriptionInput.nativeElement.value).toEqual('');
      const colorSelect = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color15) + 1})>mat-icon`)
      );
      expect(colorSelect).not.toBeNull();
    });

    test('should init header with correct values', () => {
      const authorName = fixture.debugElement.query(By.css('.header-author>span'));
      expect(authorName.nativeElement.innerHTML).toContain('fake user');
      const date = fixture.debugElement.query(By.css('.header-date>span'));
      expect(date.nativeElement.innerHTML).toContain('Dec 3, 2018');
      const avatar = fixture.debugElement.query(By.css('.header>img'));
      expect((avatar.nativeElement as HTMLImageElement).src).toContain('fake_avatar_url');
    });

    test('should update selected color', () => {
      const newColorDiv = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color2) + 1})`)
      );
      newColorDiv.triggerEventHandler('click', {});

      fixture.detectChanges();
      const selectedColor = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color2) + 1})>mat-icon`)
      );
      expect(selectedColor).not.toBeNull();
    });

    test('should cancel edit', () => {
      const cancelBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(1)'));
      cancelBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith();
    });

    test('should save edit', () => {
      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith(defaultExpectedIssue);
    });

    test('should save color edit', () => {
      const newColorDiv = fixture.debugElement.query(
        By.css(`form>div>div:nth-of-type(${getIssueColors.indexOf(IssueColor.color2) + 1})`)
      );
      newColorDiv.triggerEventHandler('click', {});

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...defaultExpectedIssue,
        color: IssueColor.color2,
      });
    });

    test('should save name edit', () => {
      const nameInput = fixture.debugElement.query(
        By.css(`form>mat-form-field:nth-of-type(1)>input`)
      );
      nameInput.nativeElement.value = 'new name';
      nameInput.nativeElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...defaultExpectedIssue,
        name: 'new name',
      });
    });

    test('should save description edit', () => {
      const descriptionInput = fixture.debugElement.query(
        By.css(`form>mat-form-field:nth-of-type(2)>textarea`)
      );
      descriptionInput.nativeElement.value = 'new description';
      descriptionInput.nativeElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...defaultExpectedIssue,
        description: 'new description',
      });
    });

    test('should save status edit', () => {
      const statusSelect: MockedComponent<MatSelect> = fixture.debugElement.query(By.css('mat-select ')).componentInstance;
      statusSelect.__simulateChange(IssueStatus.DONE);

      fixture.detectChanges();

      const saveBtn = fixture.debugElement.query(By.css('mat-dialog-actions>button:nth-of-type(2)'));
      saveBtn.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(dialogRef.close).toHaveBeenCalledWith({
        ...defaultExpectedIssue,
        status: IssueStatus.DONE,
      });
    });

    test('should display status list', () => {
      const matOptions = fixture.debugElement.queryAll(By.css('mat-option'));
      expect(matOptions.length).toBe(3);
      expect(matOptions.map(option => option.componentInstance.value)).toEqual([
        IssueStatus.TODO, IssueStatus.IN_PROGRESS, IssueStatus.DONE
      ]);
    });
  });

  afterEach(() => {
    clear();
  });
});
