export function selectSaleItems(items) {
  return items.filter((item) => {
    return Boolean(item.discount) === true
  })
}
