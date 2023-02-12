export function calculateCartItemTotalPrice(item) {
  const itemData = getItemById(item.itemId);
  const basePrice = itemData?.price;
  const customisationsPrice = item?.customisations
    ?.map((c) => c.priceExtra)
    .reduce((a, b) => a + b, 0);
  const qtyPrice = (basePrice + customisationsPrice) * item.qty;
  return qtyPrice;
}

export function calculateCartTotalPrice(cart) {
  return cart.map(calculateCartItemTotalPrice).reduce((a, b) => a + b, 0);
}
