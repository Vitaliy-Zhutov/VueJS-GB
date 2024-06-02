<template>
    <div>
        <img :src="bigImg" width="1100px">
        <div class="catimg">
            <img @click="selectImg(cat)" v-for="(cat, index) in cats" :key="index" :src="cat" alt="">
        </div>
    </div>
</template>

<script>
import img from "@/assets/img/cat-3.jpg";
    export default {
        data() {
            return {
                bigImg: '',
                cats: {
                    cat1: require("@/assets/img/cat-1.jpg"),
                    cat2: require("@/assets/img/cat-2.jpg"),
                    cat3: img,
                }
            }
        },
        methods: {
            selectImg(cat) {
                this.bigImg = cat;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>