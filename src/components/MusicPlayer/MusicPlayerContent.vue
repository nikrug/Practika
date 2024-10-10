<script>
export default {
  el: '#app',
  data() {
    return{
        fillColor: 'none',
        strokeColor: '#4C526A',
        isColorChanged: false,
        audio: new Audio('/src/Pictures/Daisuke.mp3'),
        isPlaying: false
      };
    },
  methods: {
    
    toggleMusic() {
      if (this.isPlaying) {
        this.audio.pause(); // Пауза, если музыка играет
      } else {
        this.audio.play(); // Играть, если музыка приостановлена
      }
      this.isPlaying = !this.isPlaying; // переключение флага
    },
  
    
  changeColor: function() {
    if (this.isColorChanged) {
            this.fillColor = 'none'; // восстанавливаем прежний цвет заливки
            this.strokeColor = '#4C526A'; // восстанавливаем прежний цвет обводки
          } else {
            this.fillColor = 'blue'; // изменяем цвет заливки на синий
            this.strokeColor = 'blue'; // изменяем цвет обводки на красный
          }
          this.isColorChanged = !this.isColorChanged; // переключаем флаг
        }

}

}
</script>

<template>

    <div class="audio-player">
        <div class="controls">
      <button @click="toggleMusic" class="play-button">
        <img v-if="isPlaying" src="/src\assets\Music-img\pause-button.svg">
        <img v-else src="/src\assets\Music-img\Group 1 (1).svg">
      </button>


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
    <div class="audio-info-mobile" id="app" style="">
    <svg v-bind:width="36" v-bind:height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" v-on:click="changeColor">
      <path d="M9.01438 20.2892L9.01445 20.2892L9.022 20.2996C10.2303 21.9682 11.6853 23.4209 13.1963 24.7077L13.2133 24.7222L13.2296 24.7373C13.9196 25.3801 15.0503 26.3493 16.1078 27.1628C16.6373 27.5702 17.1325 27.9262 17.5355 28.1801C17.7302 28.3027 17.8888 28.3922 18.0096 28.4508C18.1442 28.3862 18.3258 28.2741 18.5599 28.098C18.7287 27.9711 18.8963 27.8336 19.0727 27.6887L19.0855 27.6782C19.2476 27.545 19.4262 27.3982 19.5947 27.2742C22.9223 24.7423 26.3382 21.7792 28.0494 18.6251C29.4556 15.6212 29.3553 12.1372 27.3984 10.063C24.7489 7.7008 20.7835 8.18535 18.7893 10.6429L17.9924 11.625L17.2206 10.623C16.6874 9.93088 16.038 9.38743 15.2644 8.98606C12.018 7.71216 8.74532 9.0299 7.40039 11.8676C6.45694 14.8557 7.25826 17.9287 9.01438 20.2892Z"  v-bind:stroke="strokeColor" stroke-width="2" v-bind:fill="fillColor"/>
    </svg>
  </div>
    <img src="/src\assets\Music-img\icon (4).svg" alt="Загрузка">
    <img src="/src\assets\Music-img\icon (5).svg" alt="Три">
  </div>

  </div>



</template>

<style lang="scss">
@import "MusicPlayer.scss";


</style>