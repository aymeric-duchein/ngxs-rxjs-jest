import {Issue, IssueColor, IssueStatus} from '@src/app/core/issue/issue.model';

export const MOCK_TODO_ISSUE = {
  id: '1',
  name: 'name 1',
  description: 'Fake description',
  author: 'Author fake',
  authorAvatar: 'fakeUrl',
  date: '2020-01-05T08:34:33.492Z',
  transformedDate: 'Jan 5, 2020',
  status: IssueStatus.TODO,
  color: IssueColor.color16,
};

export const MOCK_IN_PROGRESS_ISSUE = {
  id: '2',
  name: 'a name 2',
  description: 'Fake description',
  author: 'Author',
  authorAvatar: 'Url',
  date: '2018-01-05T08:34:33.492Z',
  transformedDate: 'Jan 5, 2018',
  status: IssueStatus.IN_PROGRESS,
  color: IssueColor.color11,
};

export const MOCK_DONE_ISSUE = {
  id: '3',
  name: 'b name 3',
  description: 'mock done issue',
  author: 'mock',
  authorAvatar: 'mock',
  date: '2021-01-05T08:34:33.492Z',
  transformedDate: 'Jan 5, 2018',
  status: IssueStatus.DONE,
  color: IssueColor.color3,
};


export const MOCK_ISSUES: Issue[] = [
  {
    id: '1',
    name: 'name 1',
    description: 'Fake description',
    author: 'Author fake',
    authorAvatar: 'fakeUrl',
    date: '2020-01-05T08:34:33.492Z',
    status: IssueStatus.TODO,
    color: IssueColor.color16,
  },
  {
    id: '2',
    name: 'name 2',
    description: 'Fake description 2',
    author: 'Author fake',
    authorAvatar: 'fakeUrl',
    date: '2019-01-05T08:34:33.492Z',
    status: IssueStatus.DONE,
    color: IssueColor.color2,
  },
  {
    id: '3',
    name: 'name 3',
    description: 'Fake description 3',
    author: 'Author fake',
    authorAvatar: 'fakeUrl',
    date: '2021-01-05T08:34:33.492Z',
    status: IssueStatus.IN_PROGRESS,
    color: IssueColor.color8,
  },
];

export const MOCK_ISSUE_PAYLOAD = {
  data: {
    id: 'fake-id',
    name: 'personNickname',
    description: 'stringShort',
    author: 'name',
    authorAvatar: 'https://images.unsplash.com/photo-1577316581835-e84745e5db69',
    date: 'dateTime|UNIX',
    status: 'To do'
  }
};
