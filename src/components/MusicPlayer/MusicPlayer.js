import noUiSlider from 'nouislider';
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

popup.addEventListener("click", function(event) {
  event.stopPropagation(); 
});

document.addEventListener("click", function() {
  popup.classList.remove("show");
});
  var slider = document.getElementById('slider');
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
