
  var popup = document.getElementById("myPopup");
  var closeButton = document.getElementById("closeButton");

  function formatTime(value) {
    const pad = (n) => ('0' + n).slice(-2);
    const mins = Math.floor(value);
    return `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;
}

var sliderInitialized = false;

function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle("show");

    if (popup.classList.contains("show") && !sliderInitialized) {
        var invertConnectsSlider = document.getElementById('invert-connects');
        noUiSlider.create(invertConnectsSlider, {
            start: [1 * 60, 2 * 60],
            step: 1,
            connect: true,
            range: {
                min: 0,
                max: 3 * 60
            },
            tooltips: true, // Включаем тултипы
            format: {
                to: formatTime,
                from: function(value) {
                    return value;
                }
            }
        });

        sliderInitialized = true;
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("show");
}
//AUDIO
function playAudio() {
  let audio = document.getElementById('audio');
  let playPauseButton = document.getElementById('playPauseButton');
  
  if (audio.paused) {
    audio.play();
    playPauseButton.src = "/src/assets/Music-img/pause-button.svg"; // изменяем картинку на кнопке на иконку паузы
  } else {
    audio.pause();
    playPauseButton.src = "/src/assets/Music-img/group_1_1.svg"; // изменяем картинку на кнопке на иконку плея
  }
}
function changeColor() {
  let colorChangePath = document.getElementById('colorChangePath');
  let currentStrokeColor = colorChangePath.getAttribute('stroke');
  if (currentStrokeColor === 'blue') {
    colorChangePath.setAttribute('stroke', '#4C526A');
    colorChangePath.setAttribute('fill', 'none');
  } else {
    colorChangePath.setAttribute('stroke', 'blue');
    colorChangePath.setAttribute('fill', 'blue');
  }
}

///SLIDER

