import { gql } from '@apollo/client'
import { client } from './client'

export const FetchAllProducts = () => {
  return client.query({
    query: gql`
      query {
        category {
          name
          products {
            id
            name
            category
            prices {
              currency {
                label
                symbol
              }
              amount
            }
            inStock
            gallery
            description
            brand
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
          }
        }
      }
    `,
  })
}

export const FetchCategories = () => {
  return client.query({
    query: gql`
      query {
        categories {
          name
        }
      }
    `,
  })
}

export const FetchProductsByCategory = (category) => {
  return client.query({
    query: gql`
      query {
        category(input: { title: ${
          category ? JSON.stringify(category) : ''
        } }) {
          name
          products {
            id
            name
            category
            prices {
              currency {
                label
                symbol
              }
              amount
            }
            inStock
            gallery
            description
            brand
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
          }
        }
      }
    `,
  })
}

export const FetchProductById = (id) => {
  return client.query({
    query: gql`
      query {
        product(id: ${JSON.stringify(id)}) {
          id
          name
          category
          description
          brand
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          inStock
          gallery
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
        }
      }
    `,
  })
}

export const FetchCurrencies = () => {
  return client.query({
    query: gql`
      query {
        currencies {
          label
          symbol
        }
      }
    `,
  })
}
