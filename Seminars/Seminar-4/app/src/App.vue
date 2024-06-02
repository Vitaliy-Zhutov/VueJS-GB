<template>
    <h1>Привет!</h1>
    <HelloComponent/>
    <FotoComponent/> 
</template>

<script>
import HelloComponent from './components/HelloComponent.vue';
import FotoComponent from './components/FotoComponent.vue';

export default {
  components: { HelloComponent, FotoComponent } 
}
</script>

<style lang="scss">

</style>
