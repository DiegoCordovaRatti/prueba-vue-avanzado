<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Nabvar.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style>

</style>
