<script >
import BrouseByCategoryes from './components/Brouse-by-categoryes/brouse-by-categoryes.vue';
import HeaderBody from './components/header/header-body/header-body.vue';
import MusicPlayer from './components/MusicPlayer/MusicPlayer.vue';
import ProductonHous from './components/ProductonHouse/ProductonHous.vue';
import WhyUs from './components/why-us/why-us.vue';
export default {
  components:{
  HeaderBody,
  ProductonHous,
  MusicPlayer,
  BrouseByCategoryes,
  WhyUs
  },
  methods: {
    playMusic() {
      
      audio.play();
    }
  } 
}
</script>

<style>
    a {
        
        color: inherit; 
    }
</style>

<template>

<HeaderBody></HeaderBody>
<ProductonHous></ProductonHous>
<MusicPlayer></MusicPlayer>
<BrouseByCategoryes></BrouseByCategoryes>
<WhyUs></WhyUs>

</template>



