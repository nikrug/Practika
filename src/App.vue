<script >
import BrouseByCategoryes from './components/Brouse-by-categoryes/brouse-by-categoryes.vue';
import DownloadSound from './components/Download-sound/Download-sound.vue';
import ExperiencesFromCustomers from './components/experiences-from-customers/experiences-from-customers.vue';
import Footer from './components/footer/footer.vue';
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
  WhyUs,
  DownloadSound,
  ExperiencesFromCustomers,
  Footer
  },
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
<DownloadSound></DownloadSound>
<ExperiencesFromCustomers></ExperiencesFromCustomers>
<Footer></Footer>
</template>



