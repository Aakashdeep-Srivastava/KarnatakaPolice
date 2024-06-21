import gql from "graphql-tag";
import ID  from "graphql"; // Import ID from graphql package
// Mutation to update officer detailsinput UpdateOneOfficerInput {
  input UpdateOneOfficerInput {
    id: ID!
    name: String
    avatarUrl: String
    email: String
    phone: String
    rank: String
  }
export const UPDATE_OFFICER_MUTATION = gql`
  mutation UpdateOfficer($input: UpdateOneOfficerInput!) {
    updateOneOfficer(input: $input) {
      id
      name
      avatarUrl
      email
      phone
      rank
    }
  }
`;

// Mutation to create a new police station
export const CREATE_POLICE_STATION_MUTATION = gql`
  mutation CreatePoliceStation($input: CreateOnePoliceStationInput!) {
    createOnePoliceStation(input: $input) {
      id
      name
      location
      headOfficer {
        id
      }
    }
  }
`;

// Mutation to update police station details
export const UPDATE_POLICE_STATION_MUTATION = gql`
  mutation UpdatePoliceStation($input: UpdateOnePoliceStationInput!) {
    updateOnePoliceStation(input: $input) {
      id
      name
      location
      headOfficer {
        id
        name
        avatarUrl
      }
    }
  }
`;

// Mutation to update task stage of a task
export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
    }
  }
`;

// Mutation to create a new task
export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      stage {
        id
        title
      }
      officers {
        id
        name
      }
    }
  }
`;

// Mutation to update task details
export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      completed
      description
      dueDate
      stage {
        id
        title
      }
      officers {
        id
        name
        avatarUrl
      }
      checklist {
        title
        checked
      }
    }
  }
`;

// Mutation to create a new event
export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent($input: CreateOneEventInput!) {
    createOneEvent(input: $input) {
      id
      title
      color
      startDate
      endDate
    }
  }
`;

// Mutation to update event details
export const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEvent($input: UpdateOneEventInput!) {
    updateOneEvent(input: $input) {
      id
      title
      color
      startDate
      endDate
    }
  }
`;

// Mutation to create a new theme or sub-theme
export const CREATE_THEME_MUTATION = gql`
  mutation CreateTheme($input: CreateOneThemeInput!) {
    createOneTheme(input: $input) {
      id
      title
      description
    }
  }
`;

// Mutation to update theme or sub-theme details
export const UPDATE_THEME_MUTATION = gql`
  mutation UpdateTheme($input: UpdateOneThemeInput!) {
    updateOneTheme(input: $input) {
      id
      title
      description
    }
  }
`;
