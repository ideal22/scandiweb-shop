export const getPriceByAmount = (prices, currency) =>
  prices !== undefined &&
  prices.find(({ currency: { label } }) => label === currency).amount

const getDefaultProductAttrs = (attrs) => {
  return attrs.map((attr) => ({
    attributeName: attr.name,
    attributeItemValue: attr.items[0].value,
  }))
}

const getId = (id, selectedAttrs) => {
  const attrsStr = selectedAttrs.map((attr) => attr.attributeItemValue).sort()
  return `${id}-${attrsStr.join('-')}`
}

export const generateProductDataToAdd = (product, selectedAttrs) => ({
  productId: !selectedAttrs?.length
    ? product.id
    : getId(product.id, selectedAttrs),
  productName: product.name,
  productBrand: product.brand,
  productCount: product.count,
  productGallery: product.gallery,
  productPrices: product.prices,
  productAttrs: !selectedAttrs?.length
    ? getDefaultProductAttrs(product.attributes)
    : selectedAttrs,
})
