export const priceValueFormat = (value) => {
  var format = '$' + value.toFixed(0).replace(/^\$?[0-9]+\.?[0-9]*$/, "$&")

  return format
}