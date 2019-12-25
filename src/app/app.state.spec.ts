import {TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {AppState} from './app.state';
import {DEFAULT_USER, UserState} from '@src/app/core/user/user.state';
import {IssueState} from '@src/app/core/issue/issue.state';
import {RouterTestingModule} from '@angular/router/testing';
import {MOCK_HTTP_CLIENT_PROVIDER, MOCK_LOGIN_SERVICE_PROVIDER} from '@mocks/provider.mock';
import {DEFAULT_ISSUES} from '@src/app/core/issue/issue.data';

describe('App actions', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([
          AppState,
          UserState,
          IssueState
        ])
      ],
      providers: [
        MOCK_LOGIN_SERVICE_PROVIDER,
        MOCK_HTTP_CLIENT_PROVIDER
      ]
    });
    store = TestBed.get(Store);
  });

  test('should create an action and add an item', () => {
    const appSnapshot = store.selectSnapshot(state => state.app);
    expect(appSnapshot).toEqual({
      user: DEFAULT_USER,
      issue: {
        issues: DEFAULT_ISSUES
      }
    });
  });

});

