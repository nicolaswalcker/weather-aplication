<template>
  <div class="home">
    <div class="home">
      <!-- Using a SVG -->
      <SvgElement
        type="logo"
        name="VueLogo"
        title="Vue.js"
      />

      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
  export default {
    name: 'Home',
    components: {
      HelloWorld
    }
  };
</script>
