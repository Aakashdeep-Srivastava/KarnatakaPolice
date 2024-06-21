import gql from "graphql-tag";

// Query to get Total Police Stations, Officers, and Work Items Counts
export const DASHBOARD_TOTAL_COUNTS_QUERY = gql`
  query DashboardTotalCounts {
    policeStations {
      totalCount
    }
    officers {
      totalCount
    }
    workItems {
      totalCount
    }
  }
`;

//Query to get Upcoming Events (Duties or Work Items)
export const DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY = gql`
  query DashboardCalendarUpcomingEvents(
    $filter: EventFilter!
    $sorting: [EventSort!]
    $paging: OffsetPaging!
  ) {
    events(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        color
        startDate
        endDate
      }
    }
  }
`;

//Query to get Performance Chart Data (e.g., progress in different themes)
export const DASHBOARD_THEMES_CHART_QUERY = gql`
  query DashboardThemesChart(
    $filter: ThemeFilter!
    $sorting: [ThemeSort!]
    $paging: OffsetPaging
  ) {
    themes(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        title
        subThemes {
          title
          workItemsAggregate {
            groupBy {
              completionMonth
              completionYear
            }
            sum {
              progress
            }
          }
        }
      }
      totalCount
    }
  }
`;

// Query to get Latest Activities for Officers
export const DASHBOARD_LATEST_ACTIVITIES_OFFICERS_QUERY = gql`
  query DashboardLatestActivitiesOfficers(
    $filter: OfficerActivityFilter!
    $sorting: [OfficerActivitySort!]
    $paging: OffsetPaging
  ) {
    officerActivities(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        officer {
          id
          name
          rank
          avatarUrl
        }
        activityDate
      }
    }
  }
`;


//Query to get Latest Audits or Performance Reviews
export const DASHBOARD_LATEST_AUDITS_QUERY = gql`
  query DashboardLatestAudits(
    $filter: AuditFilter!
    $sorting: [AuditSort!]
    $paging: OffsetPaging
  ) {
    audits(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        action
        targetEntity
        targetId
        changes {
          field
          from
          to
        }
        createdAt
        user {
          id
          name
          avatarUrl
        }
      }
    }
  }
`;

//Query to get Police Stations List
export const POLICE_STATIONS_LIST_QUERY = gql`
  query PoliceStationsList(
    $filter: PoliceStationFilter!
    $sorting: [PoliceStationSort!]
    $paging: OffsetPaging!
  ) {
    policeStations(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        location
        officers {
          totalCount
        }
      }
    }
  }
`;


//Query to get Officers List
export const OFFICERS_LIST_QUERY = gql`
  query OfficersList(
    $filter: OfficerFilter!
    $sorting: [OfficerSort!]
    $paging: OffsetPaging!
  ) {
    officers(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        rank
        avatarUrl
        policeStation {
          id
          name
        }
      }
    }
  }
`;


// Query to get Contacts Associated with a Police Station
export const POLICE_STATION_CONTACTS_QUERY = gql`
  query PoliceStationContacts(
    $filter: ContactFilter!
    $sorting: [ContactSort!]
    $paging: OffsetPaging!
  ) {
    contacts(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        policeID
        email
        phone
        status
      }
    }
  }
`;


// Query to get Task Stages List
export const TASK_STAGES_QUERY = gql`
  query TaskStages(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;


// Query to get Tasks List
export const TASKS_QUERY = gql`
  query Tasks(
    $filter: TaskFilter!
    $sorting: [TaskSort!]
    $paging: OffsetPaging!
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        description
        dueDate
        completed
        stageId
        officers {
          id
          name
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  }
`;


// Query to get Task Stages for Select
export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;
