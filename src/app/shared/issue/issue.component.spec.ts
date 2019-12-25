import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IssueComponent} from './issue.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {MockModule, MockRender} from 'ng-mocks';
import {MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {By} from '@angular/platform-browser';
import {Issue} from '@src/app/core/issue/issue.model';

describe('IssueComponent', () => {
  let component: { issue: Issue, issueClick: jest.Mock };
  let fixture: ComponentFixture<{ issue: Issue, issueClick: jest.Mock }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueComponent],
      imports: [
        MockModule(MatCardModule),
        MockModule(MatIconModule)
      ]
    });

    fixture = MockRender('<app-issue [issue]="issue" (issueClick)="issueClick($event)"></app-issue>',
      {
        issue: MOCK_TODO_ISSUE,
        issueClick: jest.fn()
      }
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  test('should emit event on click', () => {
    const card = fixture.debugElement.query(By.css('mat-card'));
    card.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.issueClick).toHaveBeenCalledWith(MOCK_TODO_ISSUE);
  });
});
