import {ISSUE_STATE_NAME, IssueState} from './issue.state';
import {NgxsTestBed, NgxsTesting} from '@ngxs-labs/testing';
import {BoardIssueClick, BoardIssueDropped} from '@src/app/board/board.actions';
import {MOCK_DONE_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_ISSUE_PAYLOAD, MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {HttpIssueSuccess, OpenIssueModal} from '@src/app/core/issue/issue.actions';
import {ListingIssueClick, SearchFormUpdated} from '@src/app/listing/listing.actions';
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

  test('should open issue modal on board issue click', () => {
    dispatch(new BoardIssueClick(MOCK_TODO_ISSUE));
    expect(issueStateContext.dispatch).toHaveBeenCalledWith(new OpenIssueModal(MOCK_TODO_ISSUE));
  });

  test('should open issue modal on listing issue click', () => {
    dispatch(new ListingIssueClick(MOCK_TODO_ISSUE));
    expect(issueStateContext.dispatch).toHaveBeenCalledWith(new OpenIssueModal(MOCK_TODO_ISSUE));
  });

  test('should open issue modal on add issue click', () => {
    dispatch(new AddIssueBtnClick());
    expect(issueStateContext.dispatch).toHaveBeenCalledWith(new OpenIssueModal(undefined));
  });

  test('should return an issue from an http call', () => {
    MOCK_HTTP_CLIENT.post.mockReturnValue(of(MOCK_TODO_ISSUE));
    dispatch(new AddHttpIssueBtnClick());
    expect(MOCK_HTTP_CLIENT.post).toHaveBeenCalledWith(fakeJsonUrl, MOCK_ISSUE_PAYLOAD);
    expect(issueStateContext.dispatch).toHaveBeenCalledWith(expect.any(HttpIssueSuccess));
  });

  test('should update status of dropped issue', () => {
    issueStateContext.getState.mockReturnValue({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]});
    dispatch(new BoardIssueDropped(MOCK_TODO_ISSUE, IssueStatus.DONE));
    expect(issueStateContext.patchState).toHaveBeenCalledWith(
      {issues: [MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]}
    );
  });

  test('should update search', () => {
    dispatch(new SearchFormUpdated('new search'));
    expect(issueStateContext.patchState).toHaveBeenCalledWith({search: 'new search'});
  });

  test.todo('should update sort key without existing');

  test.todo('should update sort key with different by');

  test.todo('should update sort key with same ASC');

  test.todo('should update sort key with same DESC');

  test('should update issue', () => {
    issueStateContext.getState.mockReturnValue({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]});
    dispatch(new IssueUpsertClosed({...MOCK_TODO_ISSUE, status: IssueStatus.DONE}));
    expect(issueStateContext.patchState).toHaveBeenCalledWith(
      {issues: [MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]}
    );
  });

  test('should insert issue', () => {
    issueStateContext.getState.mockReturnValue({issues: [MOCK_IN_PROGRESS_ISSUE]});
    dispatch(new IssueUpsertClosed(MOCK_TODO_ISSUE));
    expect(issueStateContext.patchState).toHaveBeenCalledWith(
      {issues: [MOCK_IN_PROGRESS_ISSUE, MOCK_TODO_ISSUE]}
    );
  });

  test('should save http issue with colision', () => {
    issueStateContext.getState.mockReturnValue({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]});
    dispatch(new HttpIssueSuccess({...MOCK_TODO_ISSUE, status: IssueStatus.DONE}));
    expect(issueStateContext.patchState).toHaveBeenCalledWith(
      {issues: [MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]}
    );
  });

  test('should save http issue', () => {
    issueStateContext.getState.mockReturnValue({issues: [MOCK_IN_PROGRESS_ISSUE]});
    dispatch(new HttpIssueSuccess(MOCK_TODO_ISSUE));
    expect(issueStateContext.patchState).toHaveBeenCalledWith(
      {issues: [MOCK_IN_PROGRESS_ISSUE, MOCK_TODO_ISSUE]}
    );
  });

  test('should undo issue update', () => {
    issueStateContext.getState.mockReturnValue({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]});
    dispatch(new SnackbarUndoIssueUpdate({...MOCK_TODO_ISSUE, status: IssueStatus.DONE}));
    expect(issueStateContext.patchState).toHaveBeenCalledWith(
      {issues: [MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]}
    );
  });

  test('should return issues', () => {
    expect(IssueState.getIssues({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]);
  });

  test.todo('should return sort criteria');

  test('should return search criteria', () => {
    expect(IssueState.getFilter({issues: [], search: 'search'}))
    .toEqual('search');
  });

  test.todo('should return sorted issues by STATUS ASC');

  test.todo('should return sorted issues by STATUS DESC');

  test.todo('should return sorted issues by NAME ASC');

  test.todo('should return sorted issues by NAME DESC');

  test.todo('should return sorted issues by DATE ASC');

  test.todo('should return sorted issues by DATE DESC');

  test.todo('should return sorted issues by NONE ASC');

  test.todo('should return sorted issues by NONE DESC');

  test.todo('should return sorted issues by nothing');

  test('should return filtered issues', () => {
    expect(IssueState.getFilteredIssues({},
      [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE],
      'done'
    ))
    .toEqual([MOCK_DONE_ISSUE]);
  });

  test.todo('should return filtered and sorted issues');

  test.todo('should return filtered and sorted issues');

  test('should return TODO issues', () => {
    expect(IssueState.getIssuesByStatus(IssueStatus.TODO)({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_TODO_ISSUE]);
  });

  test('should return IN_PROGRESS issues', () => {
    expect(IssueState.getIssuesByStatus(IssueStatus.IN_PROGRESS)({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_IN_PROGRESS_ISSUE]);
  });

  test('should return DONE issues', () => {
    expect(IssueState.getIssuesByStatus(IssueStatus.DONE)({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_DONE_ISSUE]);
  });
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

  test('should open issue modal on board issue click', done => {
    actions.pipe(
      ofActionCompleted(OpenIssueModal),
      map((actionCompletion: ActionCompletion) => actionCompletion.action),
      take(1)
    ).subscribe(action => {
      try {
        expect(action).toEqual(new OpenIssueModal(MOCK_TODO_ISSUE));
      } catch (e) {
        done.fail(e);
      }
      done();
    });
    store.dispatch(new BoardIssueClick(MOCK_TODO_ISSUE));
  });

  test('should open issue modal on listing issue click', done => {
    actions.pipe(
      ofActionCompleted(OpenIssueModal),
      map((actionCompletion: ActionCompletion) => actionCompletion.action),
      take(1)
    ).subscribe(action => {
      try {
        expect(action).toEqual(new OpenIssueModal(MOCK_TODO_ISSUE));
      } catch (e) {
        done.fail(e);
      }
      done();
    });
    store.dispatch(new ListingIssueClick(MOCK_TODO_ISSUE));
  });

  test('should open issue modal on add issue click', done => {
    actions.pipe(
      ofActionCompleted(OpenIssueModal),
      map((actionCompletion: ActionCompletion) => actionCompletion.action),
      take(1)
    ).subscribe(action => {
      try {
        expect(action).toEqual(new OpenIssueModal(undefined));
      } catch (e) {
        done.fail(e);
      }
      done();
    });
    store.dispatch(new AddIssueBtnClick());
  });

  test('should return an issue from an http call', done => {
    actions.pipe(
      ofActionCompleted(HttpIssueSuccess),
      map((actionCompletion: ActionCompletion) => actionCompletion.action),
      take(1)
    ).subscribe(action => {
      try {
        expect(MOCK_HTTP_CLIENT.post).toHaveBeenCalledWith(fakeJsonUrl, MOCK_ISSUE_PAYLOAD);
        expect(action).toEqual(expect.any(HttpIssueSuccess));
      } catch (e) {
        done.fail(e);
      }
      done();
    });
    MOCK_HTTP_CLIENT.post.mockReturnValue(of(MOCK_TODO_ISSUE));
    store.dispatch(new AddHttpIssueBtnClick());
  });

  test('should update status of dropped issue', () => {
    store.reset({issue: {issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]}});
    store.dispatch(new BoardIssueDropped(MOCK_TODO_ISSUE, IssueStatus.DONE));
    expect(store.selectSnapshot(IssueState.getIssues)).toEqual(
    [MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]
    );
  });

  test('should update search', () => {
    store.reset({issue: {issues: []}});
    store.dispatch(new SearchFormUpdated('new search'));
    expect(store.selectSnapshot(IssueState.getFilter)).toEqual('new search');
  });

  test.todo('should update sort key without existing');

  test.todo('should update sort key with different by');

  test.todo('should update sort key with same ASC');

  test.todo('should update sort key with same DESC');

  test('should update issue', () => {
    store.reset({issue: {issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]}});
    store.dispatch(new IssueUpsertClosed({...MOCK_TODO_ISSUE, status: IssueStatus.DONE}));
    expect(store.selectSnapshot(IssueState.getIssues)).toEqual([MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]);
  });

  test('should insert issue', () => {
    store.reset({issue: {issues: [MOCK_IN_PROGRESS_ISSUE]}});
    store.dispatch(new IssueUpsertClosed(MOCK_TODO_ISSUE));
    expect(store.selectSnapshot(IssueState.getIssues)).toEqual([MOCK_IN_PROGRESS_ISSUE, MOCK_TODO_ISSUE]);
  });

  test('should save http issue with colision', () => {
    store.reset({issue: {issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]}});
    store.dispatch(new HttpIssueSuccess({...MOCK_TODO_ISSUE, status: IssueStatus.DONE}));
    expect(store.selectSnapshot(IssueState.getIssues)).toEqual([MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]);
  });

  test('should save http issue', () => {
    store.reset({issue: {issues: [MOCK_IN_PROGRESS_ISSUE]}});
    store.dispatch(new HttpIssueSuccess(MOCK_TODO_ISSUE));
    expect(store.selectSnapshot(IssueState.getIssues)).toEqual([MOCK_IN_PROGRESS_ISSUE, MOCK_TODO_ISSUE]);
  });

  test('should undo issue update', () => {
    store.reset({issue: {issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE]}});
    store.dispatch(new SnackbarUndoIssueUpdate({...MOCK_TODO_ISSUE, status: IssueStatus.DONE}));
    expect(store.selectSnapshot(IssueState.getIssues)).toEqual([MOCK_IN_PROGRESS_ISSUE, {...MOCK_TODO_ISSUE, status: IssueStatus.DONE}]);
  });

  test('should return issues', () => {
    expect(IssueState.getIssues({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]);
  });

  test.todo('should return sort criteria');

  test('should return search criteria', () => {
    expect(IssueState.getFilter({issues: [], search: 'search'}))
    .toEqual('search');
  });

  test.todo('should return sorted issues by STATUS ASC');

  test.todo('should return sorted issues by STATUS DESC');

  test.todo('should return sorted issues by NAME ASC');

  test.todo('should return sorted issues by NAME DESC');

  test.todo('should return sorted issues by DATE ASC');

  test.todo('should return sorted issues by DATE DESC');

  test.todo('should return sorted issues by NONE ASC');

  test.todo('should return sorted issues by NONE DESC');

  test.todo('should return sorted issues by nothing');

  test('should return filtered issues', () => {
    expect(IssueState.getFilteredIssues({},
      [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE],
      'done'
    ))
    .toEqual([MOCK_DONE_ISSUE]);
  });

  test.todo('should return filtered and sorted issues');

  test.todo('should return filtered and sorted issues');

  test('should return TODO issues', () => {
    expect(IssueState.getIssuesByStatus(IssueStatus.TODO)({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_TODO_ISSUE]);
  });

  test('should return IN_PROGRESS issues', () => {
    expect(IssueState.getIssuesByStatus(IssueStatus.IN_PROGRESS)({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_IN_PROGRESS_ISSUE]);
  });

  test('should return DONE issues', () => {
    expect(IssueState.getIssuesByStatus(IssueStatus.DONE)({issues: [MOCK_TODO_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_DONE_ISSUE]}))
    .toEqual([MOCK_DONE_ISSUE]);
  });
});
