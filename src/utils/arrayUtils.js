export const splitArrayInEqualParts = (arrayToSplit, parts) => {
  let tempArray = [];
  const teamSize = Math.ceil(arrayToSplit.length / parts);
  for (let i = parts; i > 0; i--) {
    const startIndex = tempArray.length * teamSize;
    let endIndex = teamSize + startIndex;
    if (i === 1) {
      endIndex = arrayToSplit.length;
    }
    tempArray.push(arrayToSplit.slice(startIndex, endIndex));
  }
  return tempArray;
};
