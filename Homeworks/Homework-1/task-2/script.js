

const app = {
    el: "#app",
    data() {
      return {
        btnMessage: "Перевернуть",
        list: ["Элемент списка 1", "Элемент списка 2", "Элемент списка 3"],
      };
    },
    methods: {
      revert() {
        this.btnMessage = this.btnMessage.split("").reverse().join("");
      },
      addTask() {
        this.list.push("Новый элемент списка");
      },
      removeTask(event) {
        event.target.remove();
      },
    },
  };

  Vue.createApp(app).mount("#app");