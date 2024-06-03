<template>
    <div>
        <form v-if="isAuth">
            <input type="text" placeholder="login">
            <input type="password" placeholder="password">
            <button>Submit</button>
        </form>
        <div v-else>
            <h1>Вы зарегистрированны</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isAuth: Boolean,
    }
}
</script>

<style lang="scss" scoped></style>