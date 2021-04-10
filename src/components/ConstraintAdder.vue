<template>
  <div class="secondaryContainer">
    <h2>Constraints</h2>
    <div
      v-if="persons.length > 2"
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
            v-for="(person, j) in persons"
            :key="j"
            :value="person.name"
            :label="person.name"
          />
        </select>
        <select
          name="constraintB"
          id="constraintB"
          v-model="constraint.personB"
        >
          <option
            v-for="(person, k) in persons"
            :key="k"
            :value="person.name"
            :label="person.name"
          />
        </select>
      </div>
      <button class="icon-button" @click="removeConstraint(i)">
        <span class="mdi mdi-trash-can" />
      </button>
      <button
        class="icon-button"
        v-if="i === constraints.length - 1"
        @click="addConstraint()"
      >
        <span class="mdi mdi-plus" />
      </button>
    </div>
    <p v-else>Not enough people yet</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ConstraintAdder.vue",
  computed: {
    ...mapState(["persons", "constraints"]),
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
</style>
