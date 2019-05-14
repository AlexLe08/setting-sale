import { expect } from 'chai'
import { selectSaleItems } from './checkout'

describe('Checkout', () => {
  it('calculates the total', () => {
    const items = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12,
      quantity: 2
    }, {
      id: 1, name: 'Pixel Charger', price: 18.95, discount: 0,
      quantity: 1
    }, {
      id: 1, name: 'Samsung Charger', price: 16.95, quantity: 1
    }]

    const expected = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12,
      quantity: 2
    }]

    expect(selectSaleItems(items)).to.deep.equal(expected)
  })
})
