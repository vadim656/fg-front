<template>
  <div class="h-full flex flex-col gap-14">
    <section v-if="sliders">
      <main-slider :sliders="sliders"/>
    </section>
    <section v-if="products">
      <s-slider-product :products="products" />
    </section>
    <section v-if="news">
      <s-news-all :news="news" />
    </section>
    <section>
      <s-contact-form />
    </section>
  </div>
</template>

<script>
import mainSlider from '~/components/mainSlider.vue'
import SContactForm from '~/components/s-contact-form.vue'
import SNewsAll from '~/components/s-news-all.vue'
import SSliderProduct from '~/components/s-slider-product.vue'

import ALL_PRODUCTS from '~/gql/ALL_PRODUCTS.gql'
import ALL_NEWS from '~/gql/ALL_NEWS.gql'
import GET_SLIDERS from '~/gql/GET_SLIDERS.gql'

export default {
  components: { mainSlider, SSliderProduct, SNewsAll, SContactForm },
  layout: 'main',
  apollo: {
    products: {
      query: ALL_PRODUCTS
    },
    news: {
      query: ALL_NEWS
    },
    sliders: {
      query: GET_SLIDERS
    }
  }
}
</script>
