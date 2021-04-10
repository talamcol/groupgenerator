<template>
  <div class="secondaryContainer">
    <h2>Persons ({{ persons.length }})</h2>
    <div v-for="(person, i) in persons" :key="i" class="fieldContainer">
      <input
        type="text"
        name="person"
        v-model="person.name"
        placeholder="Add a name here"
      />
      <button class="icon-button" @click="removePerson(i)">
        <span class="mdi mdi-trash-can" />
      </button>
      <button
        class="icon-button"
        v-if="i === persons.length - 1"
        @click="addPerson()"
      >
        <span class="mdi mdi-plus" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PersonAdder.vue",
  computed: {
    ...mapState(["persons"]),
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
</style>
