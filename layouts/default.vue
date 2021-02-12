<template lang="pug">
div
  navBar
  nuxt

</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  components: { navBar }
}
</script>
<style lang="scss">
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.texto {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #35495e
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.box {
    box-shadow: 0px 5px 10px  #333;
  }
.centrado {
    text-align: center;
  }
  .centrar {
    width: 60%;
    margin: 0px auto;
  }
</style>
