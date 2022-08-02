import React from 'react'
import { connect } from 'react-redux'
import ProductImage from '../../Components/ProductDescriptionPage/ProductImage'
import ProductInfo from '../../Components/ProductDescriptionPage/ProductInfo'
import ProductParams from '../../Components/ProductDescriptionPage/ProductParams'
import ProductPrice from '../../Components/ProductDescriptionPage/ProductPrice'
import ProductThumbs from '../../Components/ProductDescriptionPage/ProductThumbs'
import withRouter from '../../shared/withRouter'
import {
  clearSelectedAttrs,
  setAddedProducts,
  setIsProductAdded,
  setSelectedAttrs,
} from '../../store/slices/addProductSlice'
import { fetchProductById } from '../../store/slices/productByIdSlice'

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedThumb: '',
    }
  }
  componentDidMount() {
    const {
      history: { params },
      fetchProductById,
    } = this.props
    fetchProductById(params.id)
  }

  componentWillUnmount() {
    this.props.clearSelectedAttrs()
  }

  isThumbSelected = () =>
    !this.state.selectedThumb
      ? Array.isArray(this.props.product.gallery)
        ? this.props.product.gallery[0]
        : undefined
      : this.state.selectedThumb

  setSelectedThumb = (thumb) => this.setState({ selectedThumb: thumb })

  render() {
    const {
      product,
      selectedCurrency,
      clearSelectedAttrs,
      setSelectedAttrs,
      selectedAttrs,
      addProduct,
    } = this.props
    return (
      <div className="product">
        <ProductThumbs
          gallery={product.gallery}
          setSelectedThumb={this.setSelectedThumb}
        />
        <ProductImage src={this.isThumbSelected()} />
        <ProductInfo
          product={product}
          selectedCurrency={selectedCurrency}
          clearSelectedAttrs={clearSelectedAttrs}
          selectedAttrs={selectedAttrs}
          addProduct={addProduct}
        >
          <ProductParams
            product={product}
            setSelectedAttrs={setSelectedAttrs}
            selectedAttrs={selectedAttrs}
          />
          <ProductPrice
            prices={product.prices}
            selectedCurrency={selectedCurrency}
          />
        </ProductInfo>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  selectedCurrency: state.currencies.selectedCurrency,
  selectedAttrs: state.addedProducts.selectedAttrs,
})
const mapDispatchToProps = (dispatch) => ({
  fetchProductById: (id) => dispatch(fetchProductById(id)),
  setSelectedAttrs: (attrs) => dispatch(setSelectedAttrs(attrs)),
  clearSelectedAttrs: () => dispatch(clearSelectedAttrs()),
  addProduct: (product) => {
    dispatch(setAddedProducts(product))
    dispatch(setIsProductAdded(true))
  },
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage),
)
