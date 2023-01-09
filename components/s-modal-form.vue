<template>
  <div
    v-show="active"
    class="top-0 left-0 fixed w-screen h-screen flex justify-center items-center"
  >
    <div
      @click="active = !active"
      class="bg-gray-900/50 absolute w-screen h-screen z-[999999] "
    ></div>
    <div
      class="max-w-[320px] p-4 rounded-md bg-white flex justify-center items-center z-[9999999] drop-shadow-lg"
    >
      <svg
        @click="active = !active"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 absolute top-2 right-2"
      >
        <path
          fill-rule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clip-rule="evenodd"
        />
      </svg>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  }
}
</script>

<style></style>
