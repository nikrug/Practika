<script>
import SearchLine from '../search-line/search-line.vue';
import HeaderLine from './header-line.vue';

export default {
  components:{
    HeaderLine,
    SearchLine,
  }
}
</script>

<template>
<div class="body">
<HeaderLine/>
<SearchLine></SearchLine>
</div>

</template>

<style lang="scss">
@import "header-body.scss";


</style>