import * as Types from './schema.types';

// Officer type and related queries/mutations
export type UpdateOfficerMutationVariables = Types.Exact<{
 input: Types.UpdateOneOfficerInput;
}>;
export type UpdateOfficerMutation = { updateOneOfficer: Pick<Types.Officer, 'id' | 'name' | 'avatarUrl' | 'email' | 'phone' | 'rank'> };

export type OfficersQueryVariables = Types.Exact<{
 filter?: Types.InputMaybe<Types.OfficerFilter>;
 sorting?: Types.InputMaybe<Array<Types.OfficerSort> | Types.OfficerSort>;
 paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;
export type OfficersQuery = { officers: (
 Pick<Types.OfficerConnection, 'totalCount'>
 & { nodes: Array<Pick<Types.Officer, 'id' | 'name' | 'avatarUrl' | 'email' | 'phone' | 'rank'>> }
 ) };

// PoliceStation type and related queries/mutations
export type CreatePoliceStationMutationVariables = Types.Exact<{
 input: Types.CreateOnePoliceStationInput;
}>;
export type CreatePoliceStationMutation = { createOnePoliceStation: (
 Pick<Types.PoliceStation, 'id'>
 & { headOfficer: Pick<Types.Officer, 'id'> } ) };

export type UpdatePoliceStationMutationVariables = Types.Exact<{
 input: Types.UpdateOnePoliceStationInput;
}>;
export type UpdatePoliceStationMutation = { updateOnePoliceStation: (
 Pick<Types.PoliceStation, 'id' | 'name' | 'location'>
 & { headOfficer: Pick<Types.Officer, 'id' | 'name' | 'avatarUrl'> }
 ) };

export type PoliceStationsQueryVariables = Types.Exact<{
 filter?: Types.InputMaybe<Types.PoliceStationFilter>;
 sorting?: Types.InputMaybe<Array<Types.PoliceStationSort> | Types.PoliceStationSort>;
 paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;
export type PoliceStationsQuery = { policeStations: (
 Pick<Types.PoliceStationConnection, 'totalCount'>
 & { nodes: Array<Pick<Types.PoliceStation, 'id' | 'name' | 'location'> & { headOfficer: Pick<Types.Officer, 'id' | 'name'>}> }
 ) };

// Task type and related queries/mutations
export type CreateTaskMutationVariables = Types.Exact<{
  input: Types.CreateOneTaskInput;
}>;
export type CreateTaskMutation = { createOneTask: (
    Pick<Types.Task, 'id' | 'title'>
    & { stage: Pick<Types.TaskStage, 'id' | 'title'>, officers: Array<Pick<Types.Officer, 'id' | 'name'>> }
  ) };

export type UpdateTaskMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskInput;
}>;
export type UpdateTaskMutation = { updateOneTask: (
    Pick<Types.Task, 'id' | 'title' | 'completed' | 'description' | 'dueDate'>
    & { stage?: Types.Maybe<Pick<Types.TaskStage, 'id' | 'title'>>, officers: Array<Pick<Types.Officer, 'id' | 'name' | 'avatarUrl'>>, checklist: Array<Pick<Types.CheckListItem, 'title' | 'checked'>> }
  ) };

export type TasksQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.TaskFilter>;
  sorting?: Types.InputMaybe<Array<Types.TaskSort> | Types.TaskSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;
export type TasksQuery = { tasks: (
    Pick<Types.TaskConnection, 'totalCount'>
    & { nodes: Array<(
      Pick<Types.Task, 'id' | 'title' | 'description' | 'dueDate' | 'completed' | 'stageId' | 'createdAt' | 'updatedAt'>
      & { officers: Array<Pick<Types.Officer, 'id' | 'name' | 'avatarUrl'>> }
    )> }
  ) };

// TaskStage type and related queries/mutations
export type UpdateTaskStageMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskInput;
}>;
export type UpdateTaskStageMutation = { updateOneTask: Pick<Types.Task, 'id'> };

export type TaskStagesQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.TaskStageFilter>;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;
export type TaskStagesQuery = { taskStages: (
    Pick<Types.TaskStageConnection, 'totalCount'>
    & { nodes: Array<Pick<Types.TaskStage, 'id' | 'title'>> }
  ) };

// Event type and related queries/mutations
export type CreateEventMutationVariables = Types.Exact<{
  input: Types.CreateOneEventInput;
}>;
export type CreateEventMutation = { createOneEvent: Pick<Types.Event, 'id' | 'title' | 'color' | 'startDate' | 'endDate'> };

export type UpdateEventMutationVariables = Types.Exact<{
  input: Types.UpdateOneEventInput;
}>;
export type UpdateEventMutation = { updateOneEvent: Pick<Types.Event, 'id' | 'title' | 'color' | 'startDate' | 'endDate'> };

export type EventsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.EventFilter>;
  sorting?: Types.InputMaybe<Array<Types.EventSort> | Types.EventSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;
export type EventsQuery = { events: (
    Pick<Types.EventConnection, 'totalCount'>
    & { nodes: Array<Pick<Types.Event, 'id' | 'title' | 'color' | 'startDate' | 'endDate'>> }
  ) };

// Theme type and related queries/mutations
export type CreateThemeMutationVariables = Types.Exact<{
  input: Types.CreateOneThemeInput;
}>;
export type CreateThemeMutation = { createOneTheme: Pick<Types.Theme, 'id' | 'title' | 'description'> };

export type UpdateThemeMutationVariables = Types.Exact<{
  input: Types.UpdateOneThemeInput;
}>;
export type UpdateThemeMutation = { updateOneTheme: Pick<Types.Theme, 'id' | 'title' | 'description'> };

export type ThemesQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.ThemeFilter>;
  sorting?: Types.InputMaybe<Array<Types.ThemeSort> | Types.ThemeSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;
export type ThemesQuery = { themes: (
    Pick<Types.ThemeConnection, 'totalCount'>
    & { nodes: Array<Pick<Types.Theme, 'id' | 'title' | 'description'>> }
  ) };

// Dashboard queries
export type DashboardTotalCountsQueryVariables = Types.Exact<{ [key: string]: never; }>;
export type DashboardTotalCountsQuery = { officers: Pick<Types.OfficerConnection, 'totalCount'>, policeStations: Pick<Types.PoliceStationConnection, 'totalCount'>, tasks: Pick<Types.TaskConnection, 'totalCount'>, events: Pick<Types.EventConnection, 'totalCount'>, themes: Pick<Types.ThemeConnection, 'totalCount'> };
