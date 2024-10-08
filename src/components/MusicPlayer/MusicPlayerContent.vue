<script>
export default {
  methods: {
  playMusic() {
    let audio = new Audio('/src/Pictures/Daisuke.mp3');
    audio.play();
  }
}
}
</script>

<template>

    <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"><img src="/src\assets\Music-img\Group 1 (1).svg"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info-mobile">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info-mobile">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img class="audio-info-mobile" src="/src\assets\Music-img\icon (3).svg" alt="Сердечко">
    <img src="/src\assets\Music-img\icon (4).svg" alt="Загрузка">
    <img src="/src\assets\Music-img\icon (5).svg" alt="Три">
  </div>
  </div>
  <div class="audio-player">
    <audio-player-controls />
    <audio-info title="Sound Name" duration="0:12" />
    <audio-info title="Confused excited crowd slight panic and distress" />
    <audio-info title="Shocking, jumpscare" />

    <image-container />
  </div>


</template>

<style lang="scss">
@import "MusicPlayer.scss";


</style>