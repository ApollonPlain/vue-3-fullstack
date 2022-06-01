<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <p style="color:red" v-if="error">Error occurred</p>
      <input
        type="text"
        placeholder="New Event"
        v-model="inputEntry"
        required
      />
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a class="button is-primary is-small is-outlined" @click="SubmitEvent(inputEntry)">Submit</a>
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";

export default {
  name: "CalendarEntry",
  data(){
    return {
      inputEntry: "",
      error: false,
    };
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
  },
  methods: {
    SubmitEvent(inputEntry) {
      if (inputEntry === "") { return this.error = true; }
      store.SubmitEvent(inputEntry);
      this.error = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#calendar-entry {
}
</style>