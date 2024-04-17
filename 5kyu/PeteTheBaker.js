// Not optimal
function cakes(recipe, available) {
  const recipeKeys = Object.keys(recipe);
  const availableKeys = Object.keys(available);

  const recipeValues = Object.values(recipe);
  const availableValues = Object.values(available);

  let currAmount = 0;
  let smallestAmount = -1;

  if (availableKeys.length < recipeKeys.length) smallestAmount = 0;

  recipeKeys.find((recipeVal, recipeIdx) => {
    availableKeys.map((availableVal, availableIdx) => {
      if (recipeVal === availableVal) {
        if (availableValues[availableIdx] / recipeValues[recipeIdx] >= 1) {
          currAmount = Math.floor(
            availableValues[availableIdx] / recipeValues[recipeIdx]
          );
          if (currAmount < smallestAmount || smallestAmount === -1) {
            smallestAmount = currAmount;
          }
        } else {
          smallestAmount = 0;
        }
      }
    });
  });

  return smallestAmount;
}
