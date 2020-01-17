import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {Issue, IssueSortCriteria, IssueStateModel, IssueStatus, SortDirection} from './issue.model';
import {BoardIssueClick, BoardIssueDropped} from '../../board/board.actions';
import {ListingIssueClick, SearchFormUpdated} from '../../listing/listing.actions';
import {SnackbarUndoIssueUpdate} from '../snackbar/snackbar.actions';
import {AddHttpIssueBtnClick, AddIssueBtnClick} from '../header/header.action';
import {IssueUpsertClosed} from '../modal/modal.action';
import {HttpIssueSuccess, OpenIssueModal} from './issue.actions';
import {by, filterBy, filterByStatus, getFakeJsonPayload, getRandomColor} from './issue.utils';
import {DEFAULT_ISSUES, fakeJsonUrl} from './issue.data';
import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';

export const ISSUE_STATE_NAME = 'issue';

@State<IssueStateModel>({
  name: ISSUE_STATE_NAME,
  defaults: {
    issues: DEFAULT_ISSUES
  }
})
export class IssueState {

  constructor(private readonly httpClient: HttpClient) {
  }

  @Selector()
  static getIssues(state: IssueStateModel): Issue[] {
    return [...state.issues];
  }

  @Selector()
  static getFilter(state: IssueStateModel): string {
    return state.search;
  }

  @Selector([IssueState.getIssues, IssueState.getFilter])
  static getFilteredIssues(_, issues: Issue[],  search: string): Issue[] {
    return issues.filter(filterBy(search));
  }

  static getIssuesByStatus(status: IssueStatus) {
    return createSelector([IssueState], ({issues}: IssueStateModel) => issues.filter(filterByStatus(status)));
  }

  @Action([BoardIssueClick, ListingIssueClick, AddIssueBtnClick])
  openIssueModal({dispatch}, action: AddIssueBtnClick | ListingIssueClick | BoardIssueClick) {
    return dispatch(new OpenIssueModal((action as any).issue));
  }

  @Action(AddHttpIssueBtnClick)
  getHttpIssue({dispatch}: StateContext<IssueStateModel>) {
    const payload = getFakeJsonPayload();
    return this.httpClient.post(fakeJsonUrl, payload).pipe(
      map((response: Issue) => {
        const issue: Issue = {
          id: response.id,
          name: response.name,
          description: response.description,
          author: response.author,
          authorAvatar: response.authorAvatar,
          date: response.date,
          status: response.status,
          color: getRandomColor(),
        };
        return issue;
      }),
      switchMap(issue => dispatch(new HttpIssueSuccess(issue)))
    );
  }

  @Action(BoardIssueDropped)
  issuesDropped({patchState, getState}: StateContext<IssueStateModel>, {droppedIssue, status}: BoardIssueDropped) {
    const issues = getState().issues;
    patchState({issues: [...issues.filter(i => i.id !== droppedIssue.id), {...droppedIssue, status}]});
  }

  @Action(SearchFormUpdated)
  searchUpdated({patchState}: StateContext<IssueStateModel>, {search}: SearchFormUpdated) {
    patchState({search});
  }

  @Action(IssueUpsertClosed)
  upsertIssue({patchState, getState}: StateContext<IssueStateModel>, {issue}: IssueUpsertClosed) {
    const {issues} = getState();
    patchState({issues: [...issues.filter(i => i.id !== issue.id), issue]});
  }

  @Action(HttpIssueSuccess)
  saveIssue({patchState, getState}: StateContext<IssueStateModel>, {issue}: HttpIssueSuccess) {
    const {issues} = getState();
    patchState({issues: [...issues.filter(i => i.id !== issue.id), issue]});
  }

  @Action(SnackbarUndoIssueUpdate)
  resetIssueToPreviousState({patchState, getState}: StateContext<IssueStateModel>, {issue}: SnackbarUndoIssueUpdate) {
    const {issues} = getState();
    patchState({issues: [...issues.filter(i => i.id !== issue.id), issue]});
  }
}
