<template>
  <div>
    <ProjectDetails/>
  </div>
</template>

<script>
import ProjectDetails from './pages/ProjectDetails.vue'

export default {
  components: {
    ProjectDetails,
  },
}
</script>

<style lang="scss">
@import "scss/vars";

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
</style>
