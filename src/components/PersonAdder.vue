<template>
  <div class="secondaryContainer">
    <h2>Participants ({{ participants.length }})</h2>
    <p>All the persons you want to add to your team</p>
    <div v-for="(person, i) in participants" :key="i" class="fieldContainer">
      <input
        type="text"
        name="person"
        v-model="person.name"
        placeholder="Add a name here"
      />
      <div class="button-container">
        <button class="icon-button" @click="removePerson(i)">
          <span class="mdi mdi-trash-can" />
        </button>
        <button
          data-testid="addPersonButton"
          class="icon-button plus-button"
          v-if="
            i === participants.length - 1 && participants[i].name.length >= 1
          "
          @click="addPerson()"
        >
          <span class="mdi mdi-plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PersonAdder.vue",
  computed: {
    ...mapState(["participants"]),
  },
  methods: {
    ...mapActions(["removePerson", "addPerson"]),
  },
};
</script>

<style scoped>
.fieldContainer {
  display: flex;
}
.button-container {
  display: flex;
  align-items: center;
}
.plus-button {
  position: absolute;
  margin-left: 35px;
}
</style>
