import {ISSUE_STATE_NAME, IssueState} from './issue.state';
import {NgxsTestBed, NgxsTesting} from '@ngxs-labs/testing';
import {BoardIssueClick, BoardIssueDropped} from '@src/app/board/board.actions';
import {MOCK_DONE_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_ISSUE_PAYLOAD, MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {HttpIssueSuccess, OpenIssueModal} from '@src/app/core/issue/issue.actions';
import {ListingIssueClick, SearchFormUpdated, SortOptionClick} from '@src/app/listing/listing.actions';
import {AddHttpIssueBtnClick, AddIssueBtnClick} from '@src/app/core/header/header.action';
import {MOCK_HTTP_CLIENT, MOCK_HTTP_CLIENT_PROVIDER} from '@mocks/provider.mock';
import {IssueStatus, SortDirection, SortKey} from '@src/app/core/issue/issue.model';
import {of} from 'rxjs';
import {IssueUpsertClosed} from '@src/app/core/modal/modal.action';
import {SnackbarUndoIssueUpdate} from '@src/app/core/snackbar/snackbar.actions';
import {fakeJsonUrl} from '@src/app/core/issue/issue.data';
import * as uuid from 'uuid';
import {TestBed} from '@angular/core/testing';
import {ActionCompletion, Actions, NgxsModule, ofActionCompleted, Store} from '@ngxs/store';
import {map, take} from 'rxjs/operators';

describe('Issue state', () => {
  let issueStateContext;
  let dispatch;
  beforeEach(() => {

    const ngxsTestBed: NgxsTesting = NgxsTestBed.configureTestingStates({
      states: [IssueState],
      providers: [
        MOCK_HTTP_CLIENT_PROVIDER
      ]
    });

    uuid.v4 = jest.fn().mockReturnValue('fake-id');
    dispatch = ngxsTestBed.dispatch;
    issueStateContext = ngxsTestBed.getStateContextMocks[ISSUE_STATE_NAME];
  });

  test.todo('should open issue modal on board issue click');

  test.todo('should open issue modal on listing issue click');

  test.todo('should open issue modal on add issue click');

  test.todo('should return an issue from an http call');

  test.todo('should update status of dropped issue');

  test.todo('should update search');

  test.todo('should update sort key without existing');

  test.todo('should update sort key with different by');

  test.todo('should update sort key with same ASC');

  test.todo('should update sort key with same DESC');

  test.todo('should update issue on upsert with existing issue');

  test.todo('should insert issue on upsert without existing issue');

  test.todo('should save http issue with colision');

  test.todo('should save http issue');

  test.todo('should undo issue update');

  test.todo('should return issues');

  test.todo('should return sort criteria');

  test.todo('should return filter value');

  test.todo('should return sorted issues by STATUS ASC');

  test.todo('should return sorted issues by STATUS DESC');

  test.todo('should return sorted issues by NAME ASC');

  test.todo('should return sorted issues by NAME DESC');

  test.todo('should return sorted issues by DATE ASC');

  test.todo('should return sorted issues by DATE DESC');

  test.todo('should return sorted issues by NONE ASC');

  test.todo('should return sorted issues by NONE DESC');

  test.todo('should return sorted issues by nothing');

  test.todo('should return filtered issues');

  test.todo('should return filtered and sorted issues');

  test.todo('should return filtered and sorted issues');

  test.todo('should return TODO issues only');

  test.todo('should return IN_PROGRESS issues only');

  test.todo('should return DONE issues only');
});

describe('Issue state without ngxs-labs', () => {
  let store: Store;
  let actions: Actions;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([IssueState])],
      providers: [
        MOCK_HTTP_CLIENT_PROVIDER,
      ]
    });

    uuid.v4 = jest.fn().mockReturnValue('fake-id');
    store = TestBed.get(Store);
    actions = TestBed.get(Actions);
  });

  test.todo('should open issue modal on board issue click');

  test.todo('should open issue modal on listing issue click');

  test.todo('should open issue modal on add issue click');

  test.todo('should return an issue from an http call');

  test.todo('should update status of dropped issue');

  test.todo('should update search');

  test.todo('should update sort key without existing');

  test.todo('should update sort key with different by');

  test.todo('should update sort key with same ASC');

  test.todo('should update sort key with same DESC');

  test.todo('should update issue on upsert with existing issue');

  test.todo('should insert issue on upsert without existing issue');

  test.todo('should save http issue with colision');

  test.todo('should save http issue');

  test.todo('should undo issue update');

  test.todo('should return issues');

  test.todo('should return sort criteria');

  test.todo('should return filter value');

  test.todo('should return sorted issues by STATUS ASC');

  test.todo('should return sorted issues by STATUS DESC');

  test.todo('should return sorted issues by NAME ASC');

  test.todo('should return sorted issues by NAME DESC');

  test.todo('should return sorted issues by DATE ASC');

  test.todo('should return sorted issues by DATE DESC');

  test.todo('should return sorted issues by NONE ASC');

  test.todo('should return sorted issues by NONE DESC');

  test.todo('should return sorted issues by nothing');

  test.todo('should return filtered issues');

  test.todo('should return filtered and sorted issues');

  test.todo('should return filtered and sorted issues');

  test.todo('should return TODO issues only');

  test.todo('should return IN_PROGRESS issues only');

  test.todo('should return DONE issues only');
});
