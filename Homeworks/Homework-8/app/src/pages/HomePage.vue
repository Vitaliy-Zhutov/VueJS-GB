<template>
    <div>
        <HeaderComponent />
        <HomePageBaner />
        <HomePageProject />
        <HomePageCounter />
        <HomePageArticles />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import HomePageBaner from '../components/PagesComponents/HomePage/HomePageBaner.vue';
import HomePageProject from '../components/PagesComponents/HomePage/HomePageProject.vue';
import HomePageCounter from '../components/PagesComponents/HomePage/HomePageCounter.vue';
import HomePageArticles from '../components/PagesComponents/HomePage/HomePageArticles.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
    components: {
    HeaderComponent,
    HomePageBaner,
    HomePageProject,
    HomePageCounter,
    HomePageArticles,
    FooterComponent,
  },
}
</script>

<style lang="scss" scoped></style>