<template>
  <footer class=" border-t border-[#242424]/10 mt-24">
    <div
      class="container grid grid-cols-3 py-12 px-4 sm:px-0"
    >
      <div class="flex flex-col gap-6">
        <nuxt-link to="/">
          <img src="~/assets/icons/logo-footer.svg" alt="" />
        </nuxt-link>

        <a href="tel:89530722184" class="font-['Oranienbaum'] text-4xl">+7(953)072-21-84</a>

        <div class="flex items-center gap-4">
          <a href=""><img src="~/assets/icons/Vkontakte (VK).png" alt=""/></a>
          <a href=""><img src="~/assets/icons/YouTube.png" alt=""/></a>
        </div>
      </div>
      <div class="hidden sm:flex flex-col ">
        <span>Продукция</span>
        <ul>
          <li><a href="">Кетчуп</a></li>
          <li><a href="">Соус</a></li>
          <li><a href="">Соки</a></li>
        </ul>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
