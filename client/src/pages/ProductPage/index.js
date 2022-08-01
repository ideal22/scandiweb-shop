import React from 'react'
import { connect } from 'react-redux'
import ProductImage from '../../Components/ProductDescriptionPage/ProductImage'
import ProductInfo from '../../Components/ProductDescriptionPage/ProductInfo'
import ProductThumbs from '../../Components/ProductDescriptionPage/ProductThumbs'
import withRouter from '../../shared/withRouter'
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

  isNotSelectedThumb = () =>
    !this.state.selectedThumb
      ? Array.isArray(this.props.product.gallery)
        ? this.props.product.gallery[0]
        : undefined
      : this.state.selectedThumb

  setSelectedThumb = (thumb) => this.setState({ selectedThumb: thumb })

  render() {
    const { product, selectedCurrency } = this.props
    return (
      <div className="product">
        <ProductThumbs
          gallery={product.gallery}
          setSelectedThumb={this.setSelectedThumb}
        />
        <ProductImage src={this.isNotSelectedThumb()} />
        <ProductInfo product={product} selectedCurrency={selectedCurrency} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  selectedCurrency: state.currencies.selectedCurrency,
})
const mapDispatchToProps = (dispatch) => ({
  fetchProductById: (id) => dispatch(fetchProductById(id)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage),
)
