<template>
  <div>
    <div>
      <label>Start Time:</label>
      <input type="time" v-model="startTime" @input="calculateTime">
    </div>
    <div>
      <label>End Time:</label>
      <input type="time" v-model="endTime" @input="calculateTime">
    </div>
    <!-- <div>
      <label>Pause Time:</label>
      <input type="time" v-model="pauseTime" @input="calculateTime">
    </div> -->
    <p>Time Difference: {{ timeDifference }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: '',
      // pauseTime: '',
      timeDifference: ''
    }
  },
  methods: {
    calculateTime() {
      let start = new Date("01/01/2000 " + this.startTime);
      let end = new Date("01/01/2000 " + this.endTime);
      // let pause = new Date("01/01/2000 " + this.pauseTime);
      let difference = end - start;
      // let difference = end - start - pause;
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.timeDifference = hours + " hours " + minutes + " minutes";
    }
  }
}
</script>
