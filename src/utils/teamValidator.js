export const validateTeams = (teams, parts, constraints) => {
  if (teams.length != parts) {
    return false;
  }
  let isValid = true;
  teams.forEach((team) => {
    isValid = isValid && validateSingleTeam(team, constraints);
  });
  return isValid;
};

const validateSingleTeam = (team, constraints) => {
  let isValid = true;
  constraints.forEach((constraint) => {
    if (
      team.includes(constraint.personA) &&
      team.includes(constraint.personB)
    ) {
      isValid = false;
    }
  });
  return isValid;
};
