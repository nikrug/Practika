<script lang="ts">
export default {
  mounted() {
    const s = document.createElement("script");
    s.innerHTML = `
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
      `;

    document.body.appendChild(s);
  },
};
</script>

<template>
  
<div class="header-line">
  
   <header>

    <div class="wrap-logo">
  <a href="#logo" class="logo"><img src="/src\assets\header-img\Frame 3.svg" ></a>
  </div>
  
  <nav>
    <a href="#home">Home</a>
    <a href="#YouTube">Best of YouTube</a>
    <a href="#Category">Category</a>
    <a href="#Upgrages">Upgrages</a>
    <a href="#FAQ">FAQ</a>
    <a href="#logo" class="logo"><img src="" ></a>
    <button  style="    background-color: #1100ff;color: #ffffff;height: 48px;width: 87px;border: 0px; border-radius: 8px;" id="openModal">
      <div class="active"style="font-size: 16px;font-weight: 600;font-family: Poppins,sans-serif;">
        Login
      </div>
    </button>
<div id="modal" class="modal">

  <div class="login-form">
    <button class="close"name="leaf" value="1" style="margin-left: 360px;margin-top: 30px;"><img src="/src\assets\LogIn\Frame 82.svg"></button>
    <p class="text-dezine-small-grey"style="font-weight: 600; font-size: 28px;color: #020D37;margin-top: -20px;">Login</p>
    <a href="#logo" class="" style="margin-top: -20px;" >
      <img style="margin-right: 20px;" src="/src\assets\LogIn\google.svg" ><img style="" src="/src\assets\LogIn\facebook.svg" ><img style="margin-left: 18px;" src="/src\assets\LogIn\twitter.svg" >
    </a>
    <p class="text-dezine-small-grey">or use your email</p>
    <p class="text-dezine-small-grey" style="margin-left: -350px; color:#4C526A;">Email</p>
    <form style="margin-top: -10px; width: 400px;height: 50px;">
    <input class="email-password-container"placeholder="Email">
    </form>
    <p class="text-dezine-small-grey" style="margin-left: -320px; color:#4C526A;">Password</p>
    <form style="margin-top: -10px; width: 400px;height: 50px;border-radius: 8px; border:0px;">
    <input class="email-password-container"placeholder="Password" >
    </form>
    <p class="text-dezine-small-grey"style="margin-left: -130px;margin-top: 5px;">
      <label style="margin-left: -130px;margin-top: 5px;">
        <input type="checkbox" name="subscribe">
      </label>
      Remember Me
    </p>
    <button style="width: 400px;height: 52px;background-color:#0432DF;border-radius:8px; border:2px solid #FFFFFF;margin-top: 50px;">
      <p class="text-dezine-small-grey"style="font-weight: 600;color:white;">Login</p>
    </button> 
    <p class="text-dezine-small-grey"style="color: #0432DF;font-weight: 600;">or Sing Up</p>
    <p class="text-dezine-small-grey"style="font-weight: 500;color:#ACAFB8;">Forgot password?</p>
  </div>
</div>

  </nav>
  
  <div class="dropdown">
  <button class="dropbtn" onclick="toggleDropdown()"><img src="/src/assets/header-img/Frame 81.svg" ></button>
  <div class="dropdown-content" id="myDropdown">
    <div class="text-dezine-small-grey" style="background: #030B26;">
      <p>Home</p>
      <p>Best of YouTube</p>
      <p>Category</p>
      <p>Upgrades</p>
      <p>FAQ</p>
    </div>
    <button style="background-color: #1100ff; color: #ffffff; height: 48px; width: 87px; border: 0px; border-radius: 8px;" onclick="openLoginModal()">
      <div class="active" style="font-size: 16px; font-weight: 600; font-family: Poppins, sans-serif;">
        Login
      </div>
    </button>
  </div>
</div>

<div id="loginModal" class="modal">
  <div class="login-form">
    <button class="close"name="leaf" onclick="closeLoginModal()" value="1" style="margin-left: 360px;margin-top: 30px;"><img src="/src\assets\LogIn\Frame 82.svg"></button>
    <p class="text-dezine-small-grey"style="font-weight: 600; font-size: 28px;color: #020D37;margin-top: -20px;">Login</p>
    <a href="#logo" class="" style="margin-top: -20px;" >
      <img style="margin-right: 20px;" src="/src\assets\LogIn\google.svg" ><img style="" src="/src\assets\LogIn\facebook.svg" ><img style="margin-left: 18px;" src="/src\assets\LogIn\twitter.svg" >
    </a>
    <p class="text-dezine-small-grey">or use your email</p>
    <p class="text-dezine-small-grey" style="margin-left: -350px; color:#4C526A;">Email</p>
    <form style="margin-top: -10px; width: 400px;height: 50px;">
    <input class="email-password-container"placeholder="Email">
    </form>
    <p class="text-dezine-small-grey" style="margin-left: -320px; color:#4C526A;">Password</p>
    <form style="margin-top: -10px; width: 400px;height: 50px;border-radius: 8px; border:0px;">
    <input class="email-password-container"placeholder="Password" >
    </form>
    <p class="text-dezine-small-grey"style="margin-left: -130px;margin-top: 5px;">
      <label style="margin-left: -130px;margin-top: 5px;">
        <input type="checkbox" name="subscribe">
      </label>
      Remember Me
    </p>
    <button style="width: 400px;height: 52px;background-color:#0432DF;border-radius:8px; border:2px solid #FFFFFF;margin-top: 50px;">
      <p class="text-dezine-small-grey"style="font-weight: 600;color:white;">Login</p>
    </button> 
    <p class="text-dezine-small-grey"style="color: #0432DF;font-weight: 600;">or Sing Up</p>
    <p class="text-dezine-small-grey"style="font-weight: 500;color:#ACAFB8;">Forgot password?</p>
  </div>
</div>





  </header>
  
</div>


</template>

<style lang="scss">
@import "header-line.scss";


</style>