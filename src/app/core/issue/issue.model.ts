export enum IssueStatus {
  TODO = 'To do',
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
}

export enum SortKey {
  NAME,
  DATE,
  STATUS,
  NONE
}

export enum SortDirection {
  ASC,
  DESC,
}

export enum IssueColor {
  color1 = '#323E40',
  color2 = '#F2AB27',
  color3 = '#D97D0D',
  color4 = '#732231',
  color5 = '#79BAF2',
  color6 = '#51608C',
  color7 = '#8697A6',
  color8 = '#BFCDD9',
  color9 = '#D9556D',
  color10 = '#4960A6',
  color11 = '#485922',
  color12 = '#798C35',
  color13 = '#B4BF5E',
  color14 = '#6B7FF2',
  color15 = '#F2E96D',
  color16 = '#F25C05',
  color17 = '#BF5934',
  color18 = '#BF1304',
}

export interface Issue {
  id: string;
  name: string;
  description: string;
  author: string;
  authorAvatar: string;
  date: string;
  status: IssueStatus;
  color: IssueColor;
}

export interface IssueSortCriteria {
  by: SortKey;
  direction: SortDirection;
}

export class IssueStateModel {
  issues: Issue[];
  sort?: IssueSortCriteria;
  search?: string;
}
