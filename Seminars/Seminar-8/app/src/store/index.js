import { createStore } from "vuex";
export default createStore({
  state: {
    count: 0,
    cart: [],
    data: [],
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    totalItems(state) {
      return state.cart.length;
    },
    totalPrice(state) {
      return state.cart.reduce((sum, item) => sum + item.price, 0);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    ADD_ITEM_TO_CART(state, item) {
      state.cart.push(item);
    },
    SET_DATA(state, data) {
      state.data = data;
    },
  },
  // actions работает с асинроном
  actions: {
    addItemToCart(context, item) {
      context.commit("ADD_ITEM_TO_CART", item);
      // contex вызывает мутацию
    },
    fetchData({ commit }) {
      setTimeout(() => {
        const dataFromServer = ["Data1", "Data2", "Data3"];
        commit("SET_DATA", dataFromServer);
      }, 3000);
    },
  },
  modules: {},
});
