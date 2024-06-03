<template>
    <div>
        Выберите валюту:
        <select size="1" name="" id="" v-model="valuta">
            <option>₽</option>
            <option>€</option>
            <option>$</option>
        </select>
        <br><br><br>
        <div v-for="product in products" :key="product.id">
            <p>Название: {{ product.name }}</p>
            <p>Цена: {{ formattedPrice(product.price) }}</p>
            <p v-if="product.available">Статус: Available</p>
            <p v-else>Статус: Out of stock</p>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: '',
            valuta: '',
            products: [
                {
                    id: 1,
                    name: 'Хлеб',
                    price: 40,
                    available: true
                },
                {
                    id: 2,
                    name: 'Мясо',
                    price: 350,
                    available: false
                },
                {
                    id: 3,
                    name: 'Молоко',
                    price: 70,
                    available: true
                },
            ]
        };
    },

    computed: {
        formattedPrice() {
            if (this.valuta === '₽') {
                return price => `₽ ${price}`
            } else if (this.valuta === '€') {
                return price => `€ ${(price / 96.87).toFixed(2)}`;
            } else {
                return price => `$ ${(price / 89.38).toFixed(2)}`
            }
        }
    },

    mounted() {

    },

    methods: {

    },
}
</script>

<style lang="scss" scoped></style>