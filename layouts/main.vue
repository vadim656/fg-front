<template>
  <div class="bg-[#F8F8F8]">
    <the-header/>

    <Nuxt />
    <the-footer/>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
export default {
  components: { TheHeader, TheFooter },}
</script>

<style></style>
