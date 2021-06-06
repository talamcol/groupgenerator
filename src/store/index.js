import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    participants: [{ name: "" }],
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
      state.participants.push(person);
    },
    removePerson(state, index) {
      if (state.participants.length === 1) {
        state.participants[0].name = "";
      } else {
        state.participants.splice(index, 1);
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
    resetParticipants(state) {
      state.participants.length = 0;
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
    resetParticipants({ commit }) {
      commit("resetParticipants");
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
    participantsAsNames: (state) => {
      return state.participants
        .filter((person) => person.name !== "")
        .map((person) => person.name);
    },
  },
});
