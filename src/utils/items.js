export function compareCartItems(a, b) {
  // Compare if the actual item is the same
  if (a.itemId !== b.itemId) return false;

  // Compare if the customisations are the same
  if (!compareItemCustomisations(a, b)) return false;

  // Happy ending! They are the same!
  return true;
}
export function tryToFindItemInCart(cart, item) {
  return cart.find((el) => compareCartItems(el, item));
}

export function compareItemCustomisations(a, b) {
  let areTheSame = true;

  // Try to find a stringified elements of b in stringified a
  a.customisations?.forEach((el) => {
    console.log(el, b.customisations);
    if (!JSON.stringify(b.customisations).includes(JSON.stringify(el)))
      areTheSame = false;
  });

  // If already not the same, return earlier
  if (!areTheSame) return false;

  // Try to find a stringified elements of 'b' in stringified 'a'
  b.customisations?.forEach((el) => {
    if (!JSON.stringify(a.customisations).includes(JSON.stringify(el)))
      areTheSame = false;
  });

  return areTheSame;
}
