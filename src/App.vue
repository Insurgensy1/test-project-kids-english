<template>
  <div id="app" class="wrapper">
    <Header></Header>
    <infoSection></infoSection>
    <Carousel></Carousel>
    
   </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import 'src/components/header.scss';
@import 'src/components/infosection.scss';
.wrapper{
  max-width: 1920px;
  margin: auto;
}

</style>

<script>

  
import Header from './components/Header'
import infoSection from './components/infoSection'
import Carousel from './components/Carousel'


  


  export default {
     components:{
      'Header':Header,
      'infoSection':infoSection,
      'Carousel':Carousel
      
    },

    mounted(){
      (function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);
    }
  }
</script>