import { validateTeams } from "../../utils/teamValidator";

const mockTeams = [
  ["Markus", "Rolf", "Maik"],
  ["Jelena", "Tatiana", "Ruby"],
  ["Niklas", "Jasmin", "Nora"],
];
const mockConstraints = [
  {
    personA: "Maik",
    personB: "Jelena",
  },
  { personA: "Niklas", personB: "Jelena" },
];

describe("team validator", () => {
  it("should return false if the number of teams don't match with the parts", () => {
    expect(validateTeams(mockTeams, 4, mockConstraints)).toEqual(false);
  });

  it("should return true if the teams are valid", () => {
    expect(validateTeams(mockTeams, 3, mockConstraints)).toEqual(true);
  });

  it("should return false if a constraint exists", () => {
    const constraints = [
      {
        personA: "Maik",
        personB: "Rolf",
      },
    ];
    expect(validateTeams(mockTeams, 3, constraints));
  });
});
