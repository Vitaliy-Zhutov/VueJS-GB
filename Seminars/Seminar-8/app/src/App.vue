<template>
  <NavComponent />
  <RouterView />
</template>

<script>
import NavComponent from './components/NavComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
  }
}
</script>

<style lang="scss"></style>
