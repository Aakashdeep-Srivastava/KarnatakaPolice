export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

/** Represents a police officer */
export type Officer = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  policeStation?: Maybe<PoliceStation>;
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents a police station */
export type PoliceStation = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  location: Scalars['String']['output'];
  headOfficer?: Maybe<Officer>;
  officers: Array<Officer>;
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents a task assigned to officers */
export type Task = {
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']];
  completed: Scalars['Boolean']['output'];
  stage?: Maybe<TaskStage>;
  officers: Array<Officer>;
  checklist: Array<CheckListItem>;
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents a task stage */
export type TaskStage = {
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/** Represents a checklist item in a task */
export type CheckListItem = {
  title: Scalars['String']['output'];
  checked: Scalars['Boolean']['output'];
};

/** Represents an event */
export type Event = {
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  color: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents an audit log */
export type Audit = {
  action: Scalars['String']['output'];
  changes: Array<AuditChange>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  targetEntity: Scalars['String']['output'];
  targetId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

/** Represents the changes in an audit log */
export type AuditChange = {
  field: Scalars['String']['output'];
  from?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

/** Represents a connection for pagination of audits */
export type AuditConnection = {
  nodes: Array<Audit>;
  pageInfo: OffsetPageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Used for filtering audits */
export type AuditFilter = {
  action?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<AuditFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AuditFilter>>;
  targetEntity?: InputMaybe<StringFieldComparison>;
  targetId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<AuditFilterUserFilter>;
};

/** Represents the user who caused the audit log */
export type AuditFilterUserFilter = {
  and?: InputMaybe<Array<AuditFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AuditFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

/** Used for sorting audits */
export type AuditSort = {
  direction: SortDirection;
  field: AuditSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type AuditSortFields =
  | 'action'
  | 'createdAt'
  | 'id'
  | 'targetEntity'
  | 'targetId'
  | 'updatedAt';

/** Used for subscription filtering audits */
export type AuditSubscriptionFilter = {
  action?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<AuditSubscriptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AuditSubscriptionFilter>>;
  targetEntity?: InputMaybe<StringFieldComparison>;
  targetId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

/** Represents a user */
export type User = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  jobTitle: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents the offset-based pagination info */
export type OffsetPageInfo = {
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
  endCursor?: Maybe<Scalars['String']['output']>;
};

/** Represents the comparison of strings for filtering */
export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  notLike?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Represents the comparison of dates for filtering */
export type DateFieldComparison = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Represents the comparison of IDs for filtering */
export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Represents the comparison of numbers for filtering */
export type NumberFieldComparison = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Enum for sort order direction */
export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

/** Enum for sorting null values */
export enum SortNulls {
  FIRST = 'FIRST',
  LAST = 'LAST'
}
