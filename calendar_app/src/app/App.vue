<template>
  <div id="app">
    <div id="calendar-week" >
      <CalendarWeek></CalendarWeek>
    </div>
    <div id="calendar-entry">
      <CalendarEntry></CalendarEntry>
    </div>
  </div>
</template>

<script>
import CalendarEntry from './components/CalendarEntry.vue'
import CalendarWeek from './components/CalendarWeek.vue'

export default {
  name: "App",
  components: {
      CalendarEntry,
      CalendarWeek
  }
  
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

#app {
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

#calendar-week {
  margin-top: 50px;
}

#calendar-entry {
}
</style>