export const getPriceByAmount = (prices, currency) =>
  prices !== undefined &&
  prices.find(({ currency: { label } }) => label === currency).amount

const getDefaultProductAttrs = (attrs) =>
  attrs.map((attr) => ({
    attributeName: attr.name,
    attributeItemValue: attr.items[0].value,
  }))

const getId = (id, name) => {
  return `${id}-${name}`
}

export const generateProductDataToAdd = (product, selectedAttrs) => ({
  productId: !selectedAttrs ? product.id : getId(product.id, product.name),
  productName: product.name,
  productBrand: product.brand,
  productCount: product.count,
  productGallery: product.gallery,
  productPrices: product.prices,
  productAttrs: !selectedAttrs
    ? getDefaultProductAttrs(product.attributes)
    : selectedAttrs,
})
