<template>
    <div>
        <HeaderComponent/>
        <BlogDetailsPageBaner/>
        <BlogDetailsPageArticles/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import BlogDetailsPageBaner from '../components/PagesComponents/BlogDetailsPage/BlogDetailsPageBaner.vue';
import BlogDetailsPageArticles from '../components/PagesComponents/BlogDetailsPage/BlogDetailsPageArticles.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
    components: {
        HeaderComponent,
        BlogDetailsPageBaner,
        BlogDetailsPageArticles,
        FooterComponent,
    },
}
</script>

<style lang="scss" scoped></style>