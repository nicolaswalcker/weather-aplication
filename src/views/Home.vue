<template>
  <div class="home">
    <SideBar />
    <div>sa41as54</div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
export default {
  name: 'Home',
  components: {
    SideBar
  }
};
</script>
<style lang="scss" scoped>
.home {
  display:grid;
  grid-template-columns: 25% 1fr;
  height: 100%;
}
</style>