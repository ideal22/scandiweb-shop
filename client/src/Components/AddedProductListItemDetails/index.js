import React, { Component } from 'react'
import ProductDetails from './ProductDetails'
import {
  decreaseProductCount,
  deleteProduct,
  getTotalAmount,
  getTotalCount,
  increaseProductCount,
} from '../../store/slices/addProductSlice'
import { connect } from 'react-redux'
import ImageSlider from '../ImageSlider'

class AddedProductListItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSliderIndex: 0,
    }
  }
  componentDidMount() {
    const { getTotalAmount, getTotalCount, selectedCurrency } = this.props
    getTotalCount()
    getTotalAmount(selectedCurrency.label)
    this.setState({ imgSliderIndex: 0 })
  }

  componentDidUpdate(prevProps) {
    const { getTotalAmount, getTotalCount, selectedCurrency, product } =
      this.props
    if (prevProps.product.productCount !== product.productCount) {
      getTotalCount()
      getTotalAmount(selectedCurrency.label)
    }
  }

  next = () => {
    if (
      this.state.imgSliderIndex ===
      this.props.product.productGallery.length - 1
    ) {
      this.setState({ imgSliderIndex: 0 })
    } else {
      this.setState({ imgSliderIndex: this.state.imgSliderIndex + 1 })
    }
  }

  prev = () => {
    if (this.state.imgSliderIndex === 0) {
      this.setState({
        imgSliderIndex: this.props.product.productGallery.length - 1,
      })
    } else {
      this.setState({ imgSliderIndex: this.state.imgSliderIndex - 1 })
    }
  }
  render() {
    const {
      product,
      selectedCurrency,
      increaseProduct,
      decreaseProduct,
      deleteProduct,
      isModalOpened,
    } = this.props
    return (
      <div className="cart__item">
        <button
          className="remove-btn"
          onClick={() => {
            deleteProduct(product.productId)
          }}
        >
          remove
        </button>

        <ProductDetails product={product} selectedCurrency={selectedCurrency} />
        <div className="cart__item-img">
          <div className="item__amount">
            <button
              className="btn"
              onClick={() => {
                increaseProduct(product.productId)
              }}
            >
              +
            </button>
            <span>{product.productCount}</span>
            <button
              className="btn"
              onClick={() => {
                decreaseProduct(product.productId)
              }}
              disabled={product.productCount === 1}
            >
              -
            </button>
          </div>
          <div
            className={`item__img ${!isModalOpened ? 'item__img-slider' : ''}`}
          >
            <img
              src={product.productGallery[this.state.imgSliderIndex]}
              alt=""
            />
            {!isModalOpened && (
              <ImageSlider prev={this.prev} next={this.next} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isModalOpened: state.modal.isModalOpened,
})

const mapDispatchToProps = (dispatch, { selectedCurrency: { label } }) => ({
  deleteProduct: (id) => {
    dispatch(deleteProduct(id))
    dispatch(getTotalCount())
    dispatch(getTotalAmount(label))
  },
  increaseProduct: (id) => dispatch(increaseProductCount(id)),
  decreaseProduct: (id) => dispatch(decreaseProductCount(id)),
  getTotalCount: () => dispatch(getTotalCount()),
  getTotalAmount: (currency) => dispatch(getTotalAmount(currency)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddedProductListItemDetails)
