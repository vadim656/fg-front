export const state = () => ({
  cart: []
})

export const getters = {
  CART: state => state.cart
}

export const mutations = {
  SET_CART (state, index) {
    state.cart.push(index)
  },
  REMOVE_FROM_CART (state, index) {
    const state2 = state.cart.filter(x => x.id !== index.id)
    state.cart = state2
  },
  // remove cart item in store
  REMOVE_All_CART (state) {
    state.cart = []
  },
  ADD_VALUE_PRODUCT (state, id) {
    const stateCart = state.cart
    const newProducts = stateCart.map(product =>
      product.id === id ? { ...product, value: product.value + 1 } : product
    )
    state.cart = newProducts
  },
  REMOVE_VALUE_PRODUCT (state, id) {
    const stateCart = state.cart
    const newProducts = stateCart.map(product =>
      product.id === id ? { ...product, value: product.value - 1 } : product
    )
    state.cart = newProducts
  }
}

export const actions = {
  ADD_TO_CART ({ commit }, item) {
    commit('SET_CART', item)
  },
  DELETE_FROM_CART ({ commit }, index) {
    commit('REMOVE_FROM_CART', index)
  },
  // delete to cart item
  RESET_CART ({ commit }) {
    commit('REMOVE_All_CART')
  },
  PLUS_CART ({ commit }, id) {
    commit('ADD_VALUE_PRODUCT', id)
  },
  MINUS_CART ({ commit }, id) {
    commit('REMOVE_VALUE_PRODUCT', id)
  }
}
