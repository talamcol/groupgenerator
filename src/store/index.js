import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [{ name: "" }],
    constraints: [
      {
        personA: "",
        personB: "",
      },
    ],
    teamHistory: [],
  },
  mutations: {
    addPerson(state, person) {
      state.persons.push(person);
    },
    removePerson(state, index) {
      if (state.persons.length === 1) {
        state.persons[0].name = "";
      } else {
        state.persons.splice(index, 1);
      }
    },
    addConstraint(state, constraint) {
      state.constraints.push(constraint);
    },
    removeConstraint(state, index) {
      if (state.constraints.length === 1) {
        state.constraints[0].personA = "";
        state.constraints[0].personB = "";
      } else {
        state.constraints.splice(index, 1);
      }
    },
    resetPersons(state) {
      state.persons.length = 0;
    },
    resetConstraints(state) {
      state.constraints.length = 0;
    },
    addTeamsToTeamHistory(state, teams) {
      state.teamHistory.push({ date: new Date(), teams: teams });
    },
  },
  actions: {
    addPerson({ commit }, person) {
      commit("addPerson", { name: person || "" });
    },
    removePerson({ commit }, index) {
      commit("removePerson", index);
    },
    resetPersons({ commit }) {
      commit("resetPersons");
    },
    addConstraint({ commit }, constraint) {
      commit(
        "addConstraint",
        constraint || {
          personA: "",
          personB: "",
        }
      );
    },
    removeConstraint({ commit }, index) {
      commit("removeConstraint", index);
    },
    resetConstraints({ commit }) {
      commit("resetConstraints");
    },
    addTeamsToTeamHistory({ commit }, teams) {
      commit("addTeamsToTeamHistory", teams);
    },
  },
  getters: {
    personsAsNames: (state) => {
      return state.persons
        .filter((person) => person.name !== "")
        .map((person) => person.name);
    },
  },
});
