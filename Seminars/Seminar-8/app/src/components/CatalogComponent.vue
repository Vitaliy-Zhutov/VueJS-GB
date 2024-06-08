<template>
    <div>
        <h1>Catalog</h1>
        <ul>
            <li v-for="product in paginatedProducts" :key="product.id">{{ product.title }}</li>
        </ul>
        <div v-if="totalPages > 1">
            <router-link v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">{{
                pageNumber }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, title: 'Product1' },
                { id: 2, title: 'Product2' },
                { id: 3, title: 'Product3' },
                { id: 4, title: 'Product4' },
                { id: 5, title: 'Product5' },
                { id: 6, title: 'Product6' },
                { id: 7, title: 'Product7' },
                { id: 8, title: 'Product8' },
                { id: 9, title: 'Product9' },
                { id: 10, title: 'Product10' },
                { id: 11, title: 'Product11' },
                { id: 12, title: 'Product12' },
                { id: 13, title: 'Product13' },
                { id: 14, title: 'Product14' },
                { id: 15, title: 'Product15' },
            ],
            itemsPerPage: 5,
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const pageNumber = this.getCurrentPageNumber();
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.products.slice(startIndex, endIndex);
        },
    },
    methods: {
        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam
        },
        getPageLink(pageNumber) {
            return `/catalogue/${pageNumber}`;
        },
    },
};
</script>

<style lang="scss" scoped></style>