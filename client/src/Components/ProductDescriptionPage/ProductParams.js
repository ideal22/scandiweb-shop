import React, { Component } from 'react'

const attrsSet = new Set()

export default class ProductParams extends Component {
  componentDidMount() {
    attrsSet.clear()
  }
  onSelectedAttrs = (attrs) => {
    attrsSet.add(attrs)
    this.props.setSelectedAttrs([...attrsSet])
  }
  render() {
    const { product, selectedAttrs } = this.props

    return (
      <div
        className={`product__params ${
          !product.inStock ? 'product__params-disable' : ''
        }`}
      >
        {product.attributes &&
          product.attributes.length &&
          product.attributes.map((attribute, idx) => {
            return (
              <React.Fragment key={idx}>
                <p className="product__params-title">{attribute.name}:</p>
                {attribute.type === 'text' ? (
                  <div className="product__params-btns">
                    {attribute.items.map((item, idx) => (
                      <button
                        className={`btn ${
                          selectedAttrs.some(
                            (attr) =>
                              attr.attributeName === attribute.name &&
                              attr.attributeItemValue === item.value,
                          )
                            ? 'selected'
                            : ''
                        }`}
                        key={idx}
                        onClick={() => {
                          this.onSelectedAttrs({
                            attributeName: attribute.name,
                            attributeItemValue: item.value,
                          })
                        }}
                      >
                        {item.value}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="product__params-swatch">
                    {attribute.items.map((item, idx) => {
                      return (
                        <button
                          style={{
                            backgroundColor: item.value,
                          }} // here I should use style prop
                          className={`swatch-btn $ ${
                            selectedAttrs.some(
                              (attr) =>
                                attr.attributeName === attribute.name &&
                                attr.attributeItemValue === item.value,
                            )
                              ? 'selected'
                              : ''
                          }`}
                          key={idx}
                          onClick={() => {
                            this.onSelectedAttrs({
                              attributeName: attribute.name,
                              attributeItemValue: item.value,
                            })
                          }}
                        ></button>
                      )
                    })}
                  </div>
                )}
              </React.Fragment>
            )
          })}
      </div>
    )
  }
}
