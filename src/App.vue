<template>
  <div id="nav">
    
   <Navegation/>
  </div>
  <router-view/>
</template>
<script>
import Navegation from './components/layout/Navegation.vue'
export default {
  components:{
    Navegation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&display=swap');
*{
  font-family: 'Alegreya Sans', sans-serif;
}
</style>
