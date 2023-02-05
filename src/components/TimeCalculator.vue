<template>
  <div>
    <div>
      <label for="startTime">Start Time:</label>
      <input type="time" id="startTime" v-model="startTime">
    </div>

    <div>
      <label for="endTime">End Time:</label>
      <input type="time" id="endTime" v-model="endTime">
    </div>

    <div>
      <label for="breakTime">Break Time:</label>
      <input type="time" id="breakTime" v-model="breakTime">
    </div>

    <p>Working Time: {{ workingTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: '',
      breakTime: ''
    };
  },
  computed: {
    workingTime() {
      const start = new Date('1970-01-01T' + this.startTime + 'Z');
      const end = new Date('1970-01-01T' + this.endTime + 'Z');
      const breakTime = new Date('1970-01-01T' + this.breakTime + 'Z');

      const diff = end - start - breakTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      return `${hours} hours ${minutes} minutes`;
    }
  }
};
</script>
