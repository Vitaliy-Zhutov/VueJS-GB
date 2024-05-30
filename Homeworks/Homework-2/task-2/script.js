const app = {
  data() {
    return {
      products: [
        { id: 1, title: "Хлеб", price: 38 },
        { id: 2, title: "Молоко", price: 72 },
        { id: 3, title: "Масло", price: 228 },
        { id: 4, title: "Мясо", price: 360 },
      ],
    };
  },
  methods: {
    sortInAscendingOrder() {
      return this.products.sort((a, b) => a.price - b.price);
    },
    sortInDescendingOrder() {
      return this.products.sort((a, b) => b.price - a.price);
    },
  },
};

Vue.createApp(app).mount("#app");
