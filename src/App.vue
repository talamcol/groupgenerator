<template>
  <div id="app" class="appContainer">
    <h1>&#10084 Group generator &#10084</h1>
    <div class="generalOptionsContainer">
      <div class="fieldWithLabel">
        <label for="parts">How many teams do you want?</label>
        <input id="parts" type="number" v-model="parts" name="parts" min="1"/>
      </div>
      <div class="fieldWithLabel">
        <label for="duration">Seconds a single name is displayed</label>
        <input id="duration" type="number" v-model="duration" name="duration" min="1"/>
      </div>
    </div>
    <div class="buttons">
      <button @click="shuffle" class="button button-block" :disabled="buttonDisabled">
        {{ buttonText }}
      </button>
    </div>

    <div class="teams">
      <div v-for="(team, i) in teams" :key="i">
        <Team :teamNumber="i+1" :teamMembers="team"/>
      </div>
    </div>

    <div class="optionsContainer">
      <PersonAdder/>
      <ConstraintAdder/>
    </div>

    <TeamOverlay :value="value" :showOverlay="overlay"/>
    <Countdown v-if="showCountdown" :startValue="5" @countdownFinished="showCountdown = false"/>

    <footer>Made with &#10084 by Colin</footer>
  </div>
</template>

<script>
import TeamOverlay from "./components/TeamOverlay"
import Countdown from "./components/Countdown"
import Team from "./components/Team"
import PersonAdder from "./components/PersonAdder"
import ConstraintAdder from "./components/ConstraintAdder"
import {mapState, mapActions, mapGetters} from "vuex";
import {validateTeams} from "./utils/teamValidator";
import {splitArrayInEqualParts} from "./utils/arrayUtils";

export default {
  name: 'app',
  components: {
    TeamOverlay,
    Countdown,
    Team,
    PersonAdder,
    ConstraintAdder
  },
  data: () => ({
    value: '',
    overlay: false,
    showCountdown: false,
    teams: [],
    parts: 3,
    duration: 1
  }),
  computed: {
    ...mapState(["constraints", "teamHistory"]),
    ...mapGetters(["participantsAsNames"]),
    buttonDisabled() {
      return this.parts > this.participantsAsNames.length
    },
    buttonText() {
      return this.buttonDisabled ? "Not enough people" : "Shuffle team"
    }
  },
  methods: {
    ...mapActions(["addTeamsToTeamHistory"]),
    shuffle() {
      let temporaryTeams = []
      let counter = 0
      while (!validateTeams(temporaryTeams, this.parts, this.constraints) && counter < 200) {
        counter++
        this.participantsAsNames.sort(() => Math.random() - 0.5);
        temporaryTeams = splitArrayInEqualParts(this.participantsAsNames, this.parts)
      }
      if (counter === 200) {
        alert("Too many constraints")
      } else {
        this.revealTeam(temporaryTeams);
        this.addTeamsToTeamHistory(temporaryTeams);
        this.teams = temporaryTeams;
      }

    },
    delayForCountdown() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 6000)
      })
    },
    revealTeam(teams) {
      let completeArray = [];
      for (let i = 0; i < teams.length; i++) {
        completeArray.push('Team ' + (i + 1));
        teams[i].forEach(member => {
          completeArray.push(member);
        });
      }
      let i = 0;
      let that = this;
      this.overlay = true;
      this.showCountdown = true;
      this.delayForCountdown().then(() => {
        let audio = new Audio(require('@/Europe_TheFinalCountdown.mp3'));
        audio.play();
        (function loop() {
          that.value = completeArray[i];
          if (++i <= completeArray.length) {
            setTimeout(loop, (that.duration * 1000) > 1000 ? (that.duration * 1000) : 1000);
          } else {
            that.overlay = false;
            setTimeout(function () {
              audio.pause();
            }, 5000)
          }
        })();
      })
    }
  },
}
</script>

<style scoped lang="scss">
@import "css/variables";

.optionsContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.generalOptionsContainer {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: $form-bg;
}

@media (max-width: 980px) {
  .generalOptionsContainer {
    width: 80%;
  }
  .generalOptionsContainer, .optionsContainer {
    flex-direction: column;
    align-items: center;
  }
}

.fieldWithLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
</style>

