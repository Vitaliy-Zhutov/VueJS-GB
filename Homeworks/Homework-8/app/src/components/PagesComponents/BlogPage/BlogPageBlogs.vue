<template>
    <section class="blog center">
        <h2 class="blog__title-left">Articles & News</h2>
        <ArticlesComponent :quantity="6" :visible="true"/>
    </section>
</template>

<script>
import ArticlesComponent from './../../ArticlesComponent.vue'

export default {
    name: 'BlogPageBlogs',
    components: {
        ArticlesComponent
    },
}
</script>

<style lang="scss" scoped>

@import "@/scss/vars";

.blog__title-left {
  text-align: left;
  margin-top: 150px;
  margin-bottom: 30px;
  color: #292f36;
  font-family: $familyTitle;
  font-size: 50px;
  font-style: normal;
  font-weight: $font-400;
  line-height: 125%;
  letter-spacing: 1px;
}
.count__page {
   margin-top: 51px;
   margin-bottom: 200px;
   display: flex;
   justify-content: center;
   &-wrap {
      display: flex;
      gap: 20px;
   }
   &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px #cda274 solid;
      width: 52px;
      height: 52px;
      border-radius: 52px;
      &-text {
         color: #292f36;
         font-family: $familyText;
         font-size: 16px;
         font-style: normal;
         font-weight: $font-500;
         line-height: 150%;
         text-transform: capitalize;
      }
      &:hover {
         background: #f4f0ec;
         border: none;
         width: 54px;
         height: 54px;
      }
   }
   &-svg:hover {
      fill: #f4f0ec;
      & circle {
         stroke: none;
      }
   }
}

</style>
