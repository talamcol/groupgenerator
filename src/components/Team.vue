<template>
  <div>
    <p class="team heading">Team {{ teamNumber }}</p>
    <p class="team" v-for="(member, i) in teamMembers" :key="i">{{ member }}</p>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: ["teamNumber", "teamMembers"]
}
</script>