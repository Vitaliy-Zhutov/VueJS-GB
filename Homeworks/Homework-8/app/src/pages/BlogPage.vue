<template>
    <div>
        <HeaderComponent />
        <BlogPageBaner />
        <BlogPageLastPost />
        <BlogPageBlogs />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import BlogPageBaner from '../components/PagesComponents/BlogPage/BlogPageBaner.vue';
import BlogPageLastPost from '../components/PagesComponents/BlogPage/BlogPageLastPost.vue';
import BlogPageBlogs from '../components/PagesComponents/BlogPage/BlogPageBlogs.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
    components: {
        HeaderComponent,
        BlogPageBaner,
        BlogPageLastPost,
        BlogPageBlogs,
        FooterComponent,
    },
}
</script>

<style lang="scss" scoped></style>