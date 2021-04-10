<template>
  <div class="overlay" v-if="showOverlay">
    <span class="value upper" v-if="value.startsWith('Team')">{{ value }}</span>
    <span class="value" v-else>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "TeamOverlay",
  props: ["value", "showOverlay"]
}
</script>