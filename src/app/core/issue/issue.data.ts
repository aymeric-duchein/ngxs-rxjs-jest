import {getRandomImg} from './issue.utils';
import {Issue, IssueColor, IssueStatus} from './issue.model';

export const fakeJsonUrl = 'https://app.fakejson.com/q';

export const DEFAULT_ISSUES: Issue[] = [
  {
    id: '1',
    name: 'name 1',
    description: 'zty',
    author: 'Aymeric',
    authorAvatar: getRandomImg(),
    date: new Date().toISOString(),
    status: IssueStatus.TODO,
    color: IssueColor.color16,
  },
  {
    id: '2',
    name: 'name 2',
    description: 'ztzeazey',
    author: 'Aymeric',
    authorAvatar: getRandomImg(),
    date: new Date().toISOString(),
    status: IssueStatus.DONE,
    color: IssueColor.color2,
  },
  {
    id: '3',
    name: 'name 1',
    description: 'zty',
    author: 'Aymeric',
    authorAvatar: getRandomImg(),
    date: new Date().toISOString(),
    status: IssueStatus.TODO,
    color: IssueColor.color14,
  },
  {
    id: '4',
    name: 'name 2',
    description: 'ztzeazey',
    author: 'Aymeric',
    authorAvatar: getRandomImg(),
    date: new Date().toISOString(),
    status: IssueStatus.DONE,
    color: IssueColor.color15,
  },
  {
    id: '5',
    name: 'name 1',
    description: 'zty',
    author: 'Aymeric',
    authorAvatar: getRandomImg(),
    date: new Date().toISOString(),
    status: IssueStatus.IN_PROGRESS,
    color: IssueColor.color5,
  },
  {
    id: '6',
    name: 'name 2',
    description: 'ztzeazey',
    author: 'Aymeric',
    authorAvatar: getRandomImg(),
    date: new Date().toISOString(),
    status: IssueStatus.IN_PROGRESS,
    color: IssueColor.color12,
  },
];
