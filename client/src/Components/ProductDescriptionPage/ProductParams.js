import React, { Component } from 'react'

export default class ProductParams extends Component {
  render() {
    const { product } = this.props

    return (
      <div className="product__params">
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
                        // className={`btn ${
                        //   this.props.activeParams.find(
                        //     (param) =>
                        //       param.paramName === attribute.name &&
                        //       param.paramValue === item.value,
                        //   )
                        //     ? 'selected'
                        //     : ''
                        // }`}
                        className="btn"
                        key={idx}
                        // onClick={() => {
                        //   setParams({
                        //     paramName: attribute.name,
                        //     paramValue: item.value,
                        //   })
                        // }}
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
                          }}
                          // className={`swatch-btn $ ${
                          //   this.props.activeParams.find(
                          //     (param) =>
                          //       param.paramName === attribute.name &&
                          //       param.paramValue === item.value,
                          //   )
                          //     ? 'selected'
                          //     : ''
                          // }`}
                          key={idx}
                          // onClick={() => {
                          //   setParams({
                          //     paramName: attribute.name,
                          //     paramValue: item.value,
                          //   })
                          // }}
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
