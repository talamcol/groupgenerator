<template>
  <div class="secondaryContainer">
    <h2>Unwanted combinations</h2>
    <p>All the persons that should not be together in one team</p>
    <div
      v-if="participants.length > 2"
      v-for="(constraint, i) in constraints"
      :key="i"
      class="fieldContainer"
    >
      <div class="fields">
        <select
          name="constraintA"
          id="constraintA"
          v-model="constraint.personA"
        >
          <option
            v-for="(person, j) in participants"
            :key="j"
            :value="person.name"
            :label="person.name"
            :disabled="person.name === constraint.personB"
          />
        </select>
        <select
          name="constraintB"
          id="constraintB"
          v-model="constraint.personB"
        >
          <option
            v-for="(person, k) in participants"
            :key="k"
            :value="person.name"
            :label="person.name"
            :disabled="person.name === constraint.personA"
          />
        </select>
      </div>
      <div class="button-container">
        <button class="icon-button" @click="removeConstraint(i)">
          <span class="mdi mdi-trash-can" />
        </button>
        <button
          class="icon-button plus-button"
          v-if="i === constraints.length - 1"
          @click="addConstraint()"
        >
          <span class="mdi mdi-plus" />
        </button>
      </div>
    </div>
    <p v-if="participants.length <= 2">Not enough people yet</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ConstraintAdder.vue",
  computed: {
    ...mapState(["participants", "constraints"]),
  },
  methods: {
    ...mapActions(["removeConstraint", "addConstraint"]),
  },
};
</script>

<style scoped>
.fieldContainer,
.fields {
  display: flex;
}

@media (max-width: 420px) {
  .fields {
    flex-direction: column;
  }
  select {
    min-width: 190px;
  }
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
