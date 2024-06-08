<template>
    <div>
        <HeaderComponent/>
        <ProjectDetailsBaner/>
        <ProjectDetailsContent/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import ProjectDetailsBaner from '../components/PagesComponents/ProjectDetailsPage/ProjectDetailsBaner.vue';
import ProjectDetailsContent from '../components/PagesComponents/ProjectDetailsPage/ProjectDetailsContent.vue';
export default {
    components: { HeaderComponent, FooterComponent, ProjectDetailsBaner, ProjectDetailsContent },
}
</script>

<style lang="scss" scoped></style>