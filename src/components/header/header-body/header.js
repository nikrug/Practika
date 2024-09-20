const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

window.addEventListener('click', function(event) {
  var dropdownContent = document.getElementById("myDropdown");
  if (event.target !== dropdownContent && event.target !== document.querySelector('.dropbtn')) {
    dropdownContent.style.display = 'none';
  }
});

function disableScroll() {
      var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollBarWidth + 'px';
    }

    function enableScroll() {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    var isScrollDisabled = false;

    function toggleScroll() {
      if (isScrollDisabled) {
        enableScroll();
        isScrollDisabled = false;
      } else {
        disableScroll();
        isScrollDisabled = true;
      }
    }

   
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
  disableScroll(); // Блокировка прокрутки
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
  enableScroll(); 
}