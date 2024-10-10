<script >
import MusicPlayerContent from './MusicPlayerContent.vue';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
export default {
  components:{
    MusicPlayerContent
},
  data() {
    return {
      formattedValues: '',
      fillColor: 'none',
        strokeColor: '#4C526A',
        isColorChanged: false,
        audio: new Audio('/src/Pictures/Daisuke.mp3'),
        isPlaying: false
    };
  },
  mounted() {
    var slider = this.$refs.slider;

noUiSlider.create(slider, {
  start: [1 * 60, 2.3 * 60],
  step: 1,
  connect: true,      
  range: {
    min: 0,
    max: 3 * 60
  },
  tooltips: {
    to: function (value) {
      var hours = Math.floor(value / 60);
      var minutes = value % 60;
      return hours + ":" + (minutes < 10 ? '0' : '') + minutes.toFixed(0); // Limit decimal places to 0
    }
  }
});

var vm = this;

slider.noUiSlider.on('update', function (values) {
  vm.formattedValues = values.map((mins) => {
    const pad = (n) => ('0' + n).slice(-2);
    return [Math.floor(mins / 60), mins % 60].map(pad).join(':');
  }).join(' - ');
});


    const s = document.createElement("script");
    s.innerHTML = `

var toggleButton = document.getElementById("toggleButton");
var popup = document.getElementById("myPopup");
var closeButton = document.getElementById("closeButton");

function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.toggle("show");
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.remove("show");
}

      `;

    document.body.appendChild(s);


  
  },



}
</script>

<template>
<div class="MusicPlayerBody">
    <div class="MusicPlayerBody__TitleBox">
        <div class="TitleTextPlayer">Best sound effects for youtube videos</div>
    </div>

    <div class="МusicPlayerBody__TabBox">

        <div class="container">
  <div class="tab">
    <input checked id="tab-btn-1" name="tab-btn" type="radio" value="">
    <label for="tab-btn-1">All</label>
    <input id="tab-btn-2" name="tab-btn" type="radio" value="">
    <label for="tab-btn-2">Jumpscare</label>
    <input id="tab-btn-3" name="tab-btn" type="radio" value="">
    <label for="tab-btn-3">Mellow</label>
    <input id="tab-btn-4" name="tab-btn" type="radio" value="">
    <label class="audio-info-mobile" for="tab-btn-4">Happiness</label>
    <input id="tab-btn-5" name="tab-btn" type="radio" value="">
    <label class="audio-info-mobile" for="tab-btn-5">Ambience</label>
    <input class="audio-info-mobile" id="tab-btn-6" name="tab-btn" type="radio" value="">
    <label class="audio-info-mobile" style="margin-right: auto;" for="tab-btn-6">Zonk</label>



    <div class="popup">
  <button class="filter-button" onclick="togglePopup('popup1')"><img src="/src/assets/Music-img/Frame 28.svg"></button>
  <span class="popuptext" id="popup1">
    <p class="text-dezine-small-grey" style="position: absolute;padding-left:15px;">Filter</p>
    <p class="text-dezine-small-grey"style="position: absolute;padding-left:15px;padding-top: 50px;">Duration</p>
    <div ref="slider"id="slider-round"class="slider-styled" style="top:" ></div>
    
    <img class="closeButton" onclick="closePopup('popup1')" src="/src\assets\Music-img\Frame 82 (1).svg">
    <button class="all-category"><p class="text-dezine-small-grey" style="color:blue; margin-top:11px;" >All categores</p></button>
    <p class="text-dezine-small-grey">
      <label style="margin-left: -100px;">
        <input type="checkbox" name="subscribe">
      </label>
      Only free sounds 
    </p>
    <p class="text-dezine-small-grey">
      <label style="margin-left: -40px;">
        <input type="checkbox" name="subscribe">
      </label>
      Only my favorite sounds 
    </p>
    <button class="apply-button"><p class="text-dezine-small-grey" style="color:white; margin-top:10px;" >Aplly</p></button>
  </span>
</div>
<div class="popup">
  <button class="filter-button-mobile" onclick="togglePopup('popup1')"><img src="/src/assets/Music-img/Frame 28 (2).svg"></button>
  <span class="popuptext" id="popup1">
    <p class="text-dezine-small-grey" >Filter</p>
    <img class="closeButton" onclick="closePopup('popup1')" src="/src\assets\Music-img\Frame 82 (1).svg">
    <p class="text-dezine-small-grey" >Filter</p>
  </span>
</div>


<!--Музыка для табов(сократить)-->
    <div class="tab-content" id="content-1">
      <MusicPlayerContent></MusicPlayerContent>
      <MusicPlayerContent></MusicPlayerContent>
      <MusicPlayerContent></MusicPlayerContent>
    </div>    
    <div class="tab-content" id="content-2">
      <MusicPlayerContent></MusicPlayerContent>
    </div>
    <div class="tab-content" id="content-3">
      <MusicPlayerContent></MusicPlayerContent>
    </div>
    <div class="tab-content" id="content-4">
      <MusicPlayerContent></MusicPlayerContent>
  </div>
    </div>


<a href="" class="music-link-text">See all sound effects</a>

  </div>
</div>

</div>

</template>

<style lang="scss">
@import "MusicPlayer.scss";
.slider-styled,
.slider-styled .noUi-handle {
    box-shadow: none;
}

/* Hide markers on slider handles */
.slider-styled .noUi-handle::before,
.slider-styled .noUi-handle::after {
    display: none;
}

.slider-styled .noUi-handle .noUi-touch-area {
    border: 1px solid transparent;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    width: auto;
    height: auto;
}

/* Show a border when hovering the area the handle responds to */

#slider-round {
    height: 10px;
    width: 248px;
    margin: 130px auto 0 auto;
    display: block;
}

#slider-round .noUi-connect {
  background: #0432DF;
}

#slider-round .noUi-handle {
    height: 18px;
    width: 18px;
    right: -9px; /* half the width */
    border-radius: 9px;
    background: #0432DF;
    border:none;
}
.noUi-tooltip {
  background-color: transparent;
  color: rgb(90, 90, 90);
  padding: 5px;
  border: none;
  font-size: 12px;
  color: grey; size: 20px; font-weight: 500;font-family: $text-font;
}

</style>