<template>
  <div class="overlay">
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data: () => ({
    value: null,
  }),
  props: ["startValue"],
  methods: {
    countdown() {
      let that = this;
      let timeLeft = this.startValue;
      let timer = setInterval(function () {
        if (timeLeft <= 0) {
          clearInterval(timer);
          that.$emit("countdownFinished");
        } else {
          that.value = String(timeLeft);
          timeLeft--;
        }
      }, 1000);
    },
  },
  created() {
    this.value = this.startValue;
    this.countdown();
  },
};
</script>
