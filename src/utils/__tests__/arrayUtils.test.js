import { splitArrayInEqualParts } from "../../utils/arrayUtils";

describe("Array utils", () => {
  it("should split the array in 3 EQUAL parts", () => {
    const arrayToSplit = [
      "Markus",
      "Rolf",
      "Maik",
      "Jelena",
      "Tatiana",
      "Ruby",
    ];
    expect(splitArrayInEqualParts(arrayToSplit, 3)).toEqual([
      ["Markus", "Rolf"],
      ["Maik", "Jelena"],
      ["Tatiana", "Ruby"],
    ]);
  });

  it("should create 3 teams with 1 person", () => {
    const arrayToSplit = ["Markus", "Rolf", "Maik"];
    expect(splitArrayInEqualParts(arrayToSplit, 3)).toEqual([
      ["Markus"],
      ["Rolf"],
      ["Maik"],
    ]);
  });

  it("should create 2 teams with 2 participants and one team with 1 person", () => {
    const arrayToSplit = ["Markus", "Rolf", "Maik", "Jelena", "Ruby"];
    expect(splitArrayInEqualParts(arrayToSplit, 3)).toEqual([
      ["Markus", "Rolf"],
      ["Maik", "Jelena"],
      ["Ruby"],
    ]);
  });

  it("should create 2 teams with 2 participants and one team with 3 person", () => {
    const arrayToSplit = [
      "Markus",
      "Rolf",
      "Maik",
      "Jelena",
      "Ruby",
      "David",
      "Colin",
    ];
    expect(splitArrayInEqualParts(arrayToSplit, 3)).toEqual([
      ["Markus", "Rolf"],
      ["Maik", "Jelena"],
      ["Ruby", "David", "Colin"],
    ]);
  });
});
