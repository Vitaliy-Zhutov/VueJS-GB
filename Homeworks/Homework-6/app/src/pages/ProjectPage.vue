<template>
    <div>
        <HeaderComponent />
        <ProjectPageBaner />
        <ProjectPageContent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import ProjectPageBaner from '../components/PagesComponents/ProjectPage/ProjectPageBaner.vue';
import ProjectPageContent from '../components/PagesComponents/ProjectPage/ProjectPageContent.vue';
export default {
    components: {
        HeaderComponent,
        FooterComponent,
        ProjectPageBaner,
        ProjectPageContent,
    },
}
</script>

<style lang="scss" scoped></style>