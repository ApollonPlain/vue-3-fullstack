<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <p style="color: white" v-if="error">Error occurred</p>
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons" v-if="!event.edit">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="CreateEdit(day.id, event.details)"
        ></i>
        <i
          class="fa fa-trash-o delete-icon"
          @click="DeleteEvent(day.id, event.details)"
        ></i>
      </div>
      <div class="has-text-centered icons" v-else>
        <input type="text" v-model="inputEdit" required />
        <a
          class="button is-primary is-small is-outlined"
          @click="SubmitEvent(day.id, inputEdit)"
          >Submit</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CalendarEvent",
  props: ["event", "day"],
  data() {
    return {
      inputEdit: "",
      error: false,
    };
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
  methods: {
    CreateEdit(dayId, eventDetails) {
      store.setEdit(dayId, eventDetails);
    },
    DeleteEvent(dayId, eventDetails) {
      store.DeleteEvent(dayId, eventDetails);
    },
    SubmitEvent(dayId, inputEdit) {
      if (inputEdit === "") {
        return (this.error = true);
      }
      console.log(inputEdit);
      store.EditEvent(dayId, inputEdit);
      this.error = false;

      console.log(store.getActiveDay(dayId));
    },
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>