import { v4 as uuidv4 } from 'uuid';

const officers = [
  { id: uuidv4(), name: "Officer A", avatarUrl: "", email: "officer.a@example.com", phone: "1234567890", rank: "Sergeant" },
  { id: uuidv4(), name: "Officer B", avatarUrl: "", email: "officer.b@example.com", phone: "1234567890", rank: "Lieutenant" },
  // Add more officers as needed
];

const policeStations = [
  { id: uuidv4(), name: "Station A", location: "Location A", headOfficer: officers[0] },
  { id: uuidv4(), name: "Station B", location: "Location B", headOfficer: officers[1] },
  // Add more police stations as needed
];

const tasks = [
  { id: uuidv4(), title: "Task A", description: "Description A", dueDate: "2023-12-31", completed: false, stage: { id: uuidv4(), title: "Stage 1" }, officers: [officers[0]], checklist: [{ title: "Item 1", checked: false }] },
  { id: uuidv4(), title: "Task B", description: "Description B", dueDate: "2023-12-31", completed: false, stage: { id: uuidv4(), title: "Stage 2" }, officers: [officers[1]], checklist: [{ title: "Item 2", checked: false }] },
  // Add more tasks as needed
];

const events = [
  { id: uuidv4(), title: "Event A", color: "#FF0000", startDate: "2023-12-31", endDate: "2024-01-01" },
  { id: uuidv4(), title: "Event B", color: "#00FF00", startDate: "2023-12-31", endDate: "2024-01-01" },
  // Add more events as needed
];

const themes = [
  { id: uuidv4(), title: "Theme A", description: "Description A" },
  { id: uuidv4(), title: "Theme B", description: "Description B" },
  // Add more themes as needed
];

export const resolvers = {
  Query: {
    officers: () => officers,
    policeStations: () => policeStations,
    tasks: () => tasks,
    events: () => events,
    themes: () => themes,
  },
  Mutation: {
    updateOneOfficer: (_: any, { input }: any) => {
      const officer = officers.find(o => o.id === input.id);
      if (officer) {
        Object.assign(officer, input);
      }
      return officer;
    },
    createOnePoliceStation: (_: any, { input }: any) => {
      const newPoliceStation = { id: uuidv4(), ...input };
      policeStations.push(newPoliceStation);
      return newPoliceStation;
    },
    updateOnePoliceStation: (_: any, { input }: any) => {
      const station = policeStations.find(p => p.id === input.id);
      if (station) {
        Object.assign(station, input);
      }
      return station;
    },
    createOneTask: (_: any, { input }: any) => {
      const newTask = { id: uuidv4(), checklist: [], stage: null, officers: [], ...input };
      tasks.push(newTask);
      return newTask;
    },
    updateOneTask: (_: any, { input }: any) => {
      const task = tasks.find(t => t.id === input.id);
      if (task) {
        Object.assign(task, input);
      }
      return task;
    },
    createOneEvent: (_: any, { input }: any) => {
      const newEvent = { id: uuidv4(), ...input };
      events.push(newEvent);
      return newEvent;
    },
    updateOneEvent: (_: any, { input }: any) => {
      const event = events.find(e => e.id === input.id);
      if (event) {
        Object.assign(event, input);
      }
      return event;
    },
    createOneTheme: (_: any, { input }: any) => {
      const newTheme = { id: uuidv4(), ...input };
      themes.push(newTheme);
      return newTheme;
    },
    updateOneTheme: (_: any, { input }: any) => {
      const theme = themes.find(t => t.id === input.id);
      if (theme) {
        Object.assign(theme, input);
      }
      return theme;
    },
  }
};
