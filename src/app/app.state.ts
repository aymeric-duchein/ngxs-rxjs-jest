import {State} from '@ngxs/store';
import {IssueState} from './core/issue/issue.state';
import {UserState} from './core/user/user.state';

export class AppStateModel {
}

@State<AppStateModel>({
  name: 'app',
  defaults: {},
  children: [IssueState, UserState]
})
export class AppState {

}
