import {Issue, IssueColor, IssueSortCriteria, IssueStatus, SortDirection, SortKey} from './issue.model';
import * as uuid from 'uuid';

export const byDate = (direction: 1 | -1) => (issueA: Issue, issueB: Issue) => direction * issueA.date.localeCompare(issueB.date);
export const byName = (direction: 1 | -1) => (issueA: Issue, issueB: Issue) => direction * issueA.name.localeCompare(issueB.name);
export const byStatus = (direction: 1 | -1) => (issueA: Issue, issueB: Issue) => direction * (issueA.status >= issueB.status ? 1 : -1);

export const by = (criteria: IssueSortCriteria) => {
  if (!criteria) {
    return () => 0;
  }
  const direction = criteria.direction === SortDirection.ASC ? 1 : -1;
  switch (criteria.by) {
    case SortKey.DATE:
      return byDate(direction);
    case SortKey.NAME:
      return byName(direction);
    case SortKey.STATUS:
      return byStatus(direction);
    case SortKey.NONE:
      return () => 0;
  }
};

export const filterBy = (search: string) => (issue: Issue) => issue.name.includes(search || '') || issue.description.includes(search);
export const filterByStatus = (status: IssueStatus) => (issue: Issue) => issue.status === status;
export const getRandomImg = () => {
  const imgs = [
    'https://images.unsplash.com/photo-1576087414768-69e022424bb0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1574926054530-540288c8e678?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1575668697662-9d65201ffb86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1576727559016-90a828d4f9f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1575270529282-d87ae855ec1e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1575422098125-7b0355f07f77?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1576363346069-e57aab1813bf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100',
    'https://images.unsplash.com/photo-1576064710544-51347b9b1479?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100'
  ];
  return imgs[Math.floor(Math.random() * imgs.length)];
};

export const getFakeJsonPayload = () => {
  return {
    data: {
      id: uuid.v4(),
      name: 'personNickname',
      description: 'stringShort',
      author: 'name',
      authorAvatar: 'https://images.unsplash.com/photo-1577316581835-e84745e5db69',
      date: 'dateTime|UNIX',
      status: 'To do'
    }
  };
};

export const getIssueColors = Object.values(IssueColor);

export const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * getIssueColors.length);
  return getIssueColors[randomNumber];
};
