import { seedData } from "./seed.js";
import { pushScopeId, reactive } from "vue";

export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find((s) => s.active);
  },
  getDay(dayId) {
    return this.state.data.find((day) => day.id === dayId);
  },
  setActiveDay(dayId) {
    this.state.data.map((s) =>
      s.id === dayId ? (s.active = true) : (s.active = false)
    );
  },
  SubmitEvent(eventDetails) {
    const day = this.getActiveDay();
    day.events.push({ details: eventDetails, edit: false });
  },
  setEdit(dayId, eventDetails) {
    let day = this.getDay(dayId);
    day.events.map((event) =>
      event.details === eventDetails
        ? (event.edit = true)
        : (event.edit = false)
    );
  },
  EditEvent(dayId, eventDetails) {
    let day = this.getDay(dayId);
    console.log(eventDetails);
    day.events.map((event) => {
      if (event.edit == true) {
        event.details = eventDetails;
        event.edit = false;
      }
    });
  },
  DeleteEvent(dayId, eventDetails) {
    let day = this.getDay(dayId);
    day.events = day.events.filter((event) => event.details !== eventDetails);
  },
};
