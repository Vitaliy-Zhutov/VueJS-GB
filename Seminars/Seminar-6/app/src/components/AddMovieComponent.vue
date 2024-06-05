<template>
    <div>
        <h2>Добавить новый фильм</h2>
        <input type="text" placeholder="Название" v-model="title">
        <input type="text" placeholder="Год" v-model="year">
        <button @click="addNewMovie">Добавить</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                year: null,
            }
        },
        emits: [
            'add-Film',
        ],
        methods: {
            addNewMovie() {
                const newFilm = {
                    id: Date.now(),
                    title: this.title,
                    year: this.year,
                };
                this.$emit('add-Film', newFilm);
                this.title = '';
                this.year = null;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>