<script lang="ts">


export default {
  methods: {
    playMusic() {
      const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
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
<!--Шапка (ДОБАВИТЬ ЛОГОТИП ВВИДЕ КАРТИНКИ)-->
  <header>
    
    <div class="wrap-logo">
  <a href="#logo" class="logo"><img src="C:\Users\Никита\Practika\src\Logo\WavesCo.svg" ></a>
  </div>
  <nav>
    <a href="#home">Home</a>
    <a href="#YouTube">Best of YouTube</a>
    <a href="#Category">Category</a>
    <a href="#Upgrages">Upgrages</a>
    <a href="#FAQ">FAQ</a>
    <a class="active" href="#Login">Login</a>

  </nav>

  </header>
  <!--Текст после шапки(ДОБАВИТЬ КАРТИНКУ С ЛУПОЙ))-->
  <div class="HeadLine3"style="justify-content: center; align-items: center;  margin-top: 95px;"> Free download sound effects without copyright</div>
  <div class="Subtitle1-medium"style="justify-content: center; align-items: center;  margin-top: 16px; "> Downlad free copyright sound effect for your YouTube video and any use.</div>
  <!--поисковая строка-->
  <div class="search-container">
  <form >
    <input style="font-family:'Poppins', sans-serif;font-weight: 500;font-size:16px;color: #4C526A; width: 100%; line-height: 60px; padding-left: 50px;" type="text" id="search" name="search" placeholder="Search sound effects">
  </form>
</div>

<!--текст после поисковой строки-->
  <div class="Capture3-Regular"style="margin-left: -100px;"> Try keyword:happy, funny, natural, horror, jumpscare and more</div>
  <div class="Capture3-Regular"style="margin-top: 150px;"> 650.654 Avaliable Sounds. Library Updated Weekly.<a href="">See popular sounds</a></div>
  <div class="Headline6"style= "align-items: center; margin-top: 170px;"> Trusted by top YouTuber and Production House</div>
<!--Линия с логотипами(подправить картинки если запуститься)-->
  <div class="line">
    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeopus6Rt-OyAh075r16TzL9RUnOfdIX5ZyKTn9taRs35oDWhw" >
    <img src="https://w0.peakpx.com/wallpaper/130/85/HD-wallpaper-pewdiepie-399.jpg" >
        <img src="https://cdn.worldvectorlogo.com/logos/mrbeast.svg" >
        <img src="https://www.warnerbros.com/assets/images/blue-wb-shield-500x480.png" >
        <img src="https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM=w240-h480-rw" >
        <img src="https://i.pinimg.com/originals/2d/c2/d1/2dc2d1acb1338d499dcbef1de77c5c3a.png" >
        <img src="https://pickypick.com.au/cdn/shop/files/Untitled_Artwork-1_2000x.png?v=1674552785">
    </div>
    <div class="Headline4" style= "align-items: center; margin-top: 140px; margin-left: 100px;"> Best sound effects for youtube videos</div>

<!--ТАБЫ-->
    <div class="container">
  <div class="tab">
    <input checked id="tab-btn-1" name="tab-btn" type="radio" value="">
    <label for="tab-btn-1">All</label>
    <input id="tab-btn-2" name="tab-btn" type="radio" value="">
    <label for="tab-btn-2">Jumpscare</label>
    <input id="tab-btn-3" name="tab-btn" type="radio" value="">
    <label for="tab-btn-3">Mellow</label>
    <input id="tab-btn-4" name="tab-btn" type="radio" value="">
    <label for="tab-btn-4">Happiness</label>
    <input id="tab-btn-5" name="tab-btn" type="radio" value="">
    <label for="tab-btn-5">Ambience</label>
    <input id="tab-btn-6" name="tab-btn" type="radio" value="">
    <label for="tab-btn-6">Zonk</label>
<!--Музыка для табов(сократить)-->
    <div class="tab-content" id="content-1">
      <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>
  <div class="audio-player">
    <audio-player-controls />
    <audio-info title="Sound Name" duration="0:12" />
    <audio-info title="Confused excited crowd slight panic and distress" />
    <audio-info title="Shocking, jumpscare" />

    <image-container />
  </div>

    </div>
    <div class="tab-content" id="content-2">
      <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>

  <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>
    </div>
    <div class="tab-content" id="content-3">
      <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>

  <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>
    </div>
    <div class="tab-content" id="content-4">
      <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>

    </div>
    <div class="tab-content" id="content-5">
      <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>

  <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>

    </div>
    <div class="tab-content" id="content-6">
      <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>

  <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>
  <div class="audio-player">
        <div class="controls">
      <button @click="playMusic" class="play-button"></button>


    </div>
    <div class="audio-info">
      <p>Sound Name</p>
      <p style="color: #4C526A;">0:12</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Confused excited crowd slight</p>
      <p style="color: #4C526A;">panic and distress</p>
    </div>

    <div class="audio-info">
      <p style="color: #4C526A;">Shocking, jumpscare</p>
    </div>
    <div class="images-container">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (1).png" alt="Сердечко">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (2).png" alt="Загрузка">
    <img src="C:\Users\Никита\Practika\src\Pictures\icon (3).png" alt="Три">
  </div>
  </div>
    </div>
  
  </div>

</div>
<p style="margin-left: 100px; font-family: 'Poppins', sans-serif;font-weight: 600;color:#0432DF;
"><a href="">See all sound effects </a></p>
 <!--КАТЕГОРИИ С КАРТИНКАМИ МУЗЫКИ (УВЕЛИЧИТ КАРТИНКИ)-->
<div class=Headline4>
  <p style="margin-left: 100px;margin-top:200px;font-family:Poppins, sans-serif ;">Browse by category</p>
</div>

<div class="music-categories-block img">
  <div class="image-container">
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (1).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (2).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (3).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (4).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (5).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (7).svg">
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (7).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (8).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (9).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (10).svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\unsplash_PSYliyPf7yA.svg"> 
      <img src="C:\Users\Никита\Practika\src\brose by categ img\Sound category item (9).svg"> 
    </div>
  </div>

    <p style="margin-left: 100px;margin-bottom: 200px; font-family: 'Poppins', sans-serif;font-weight: 600;color:#0432DF;
"><a href="">See all category </a></p>

<!--Блок why us-->
<div class="blocks top-blocks">
        <div class="block"style="height:166px; width: 400px;">
          <div class="text">
              <p style="font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color:#F59E00;margin-top:5px;">
                WHY US?</p>
                <p style="font-family: 'Poppins', sans-serif;font-size:28px; font-weight: 600;color:#020D37;margin-top:5px;">
                  We are provide the best quality sound effects without copyright.</p>
            </div>
        </div>
        <div class="block"style="margin-right: 150px">
          <img style="width: 56px;height: 56px;margin-left:10px;" src="C:\Users\Никита\Practika\src\whyus img\icon-primary (1).svg"> 
            <div class="text">
              <p style="font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 600;color:#020D37;margin-top:70px;">
                1.203.322 Customer satisfied</p>
                <p style="font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color:#4C526A;margin-top:10px;">
                  We've helped more than 1 million customers find best sound effects</p>
            </div>
        </div>
        <div class="block">
          <img style="width: 56px;height: 56px;margin-left:10px;" src="C:\Users\Никита\Practika\src\whyus img\icon-primary.svg">
        <div class="text">
          
              <p style="font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 600;color:#020D37;margin-top:70px;">
                650.654 Sounds</p>
                <p style="font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color: #4C526A;margin-top:10px;">
                  More than 600 thousand high quality to download. Still counting</p>
            </div>
          </div>
         </div>

    <div class="blocs bottom-blocks">
        <div class="bloc"style="margin-right: 150px">
          <img style="width: 56px;height: 56px;margin-left:10px;" src="C:\Users\Никита\Practika\src\whyus img\icon-primary (2).svg">
          <div class="text">
              <p style="font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 600;color:#020D37;margin-top:70px;">
                Royalty-free</p>
                <p style="font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color:#4C526A;margin-top:10px;">
                  We've helped more than 1 million customers find best sound effects</p>
            </div>
        </div>
        <div class="bloc"style="margin-right: 50px">
          <img style="width: 56px;height: 56px;;margin-left:10px;" src="C:\Users\Никита\Practika\src\whyus img\icon-primary (3).svg">
          <div class="text">
              <p style="font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 600;color:#020D37;margin-top:70px;">
                Provide proper sounds</p>
                <p style="font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color:#4C526A;margin-top:10px;">
                  We just provide sounds with the best quality  for customers</p>
            </div>
        </div>
    </div>
<!--БЛОК DOWNLOAD-->
    <div class="container-download">
  <div class="text-download">
    <p style="font-family: 'Poppins', sans-serif;font-size: 36px; font-weight: 700;color: #FFFFFF;
margin-top:5px;">Download sound effects for your project</p>
  </div>
  <div class="text-download">
    <p style="font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 500;color:#EEEEEE;margin-top:5px;">Find the right plan for you</p>
  </div>
  <div class="blocks-download">
  <div   class="block-download">
    <p style="margin-left:30px;font-family: 'Poppins', sans-serif;font-size: 28px; font-weight: 500;color:#EEEEEE;margin-top:5px;">Basic</p>
    <p style="margin-left:30px;font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 500;color:#EEEEEE;margin-top:5px;">Download any royalty-free sound effects</p>
    <p style="margin-left:30px;margin-top:44px; font-family: 'Poppins', sans-serif;font-size: 20px; font-weight: 600;color:#EEEEEE;">Free</p>
    <button style="width: 138px;height: 52px;margin-left:30px;background-color:#0432DF;border-radius:15px; border:2px solid #FFFFFF  ;">
      <p style=" font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color:#EEEEEE;">Get started</p>
    </button> 
  </div>
    <div style="background-color:#1B4BFF ; border:0px;" class="block-download">
      <p style="margin-left:30px;font-family: 'Poppins', sans-serif;font-size: 28px; font-weight: 500;color:#EEEEEE;margin-top:5px;">Premium</p>
      <p style="margin-left:30px;font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 500;color:#EEEEEE;margin-top:5px;">Download premium sound effects and use them for any business purpose</p>
      <p style="margin-left:30px;font-family: 'Poppins', sans-serif;font-size: 20px; font-weight: 600;color:#EEEEEE;margin-top:5px;">Start from $12/month</p>
      <button style="width: 138px;height: 52px;margin-left:30px;border-radius:15px; border:2px ; background-color:#FFFFFF;" >
        <p style=" font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 600;color:#0432DF;">Get started</p>
      </button>
    </div>
    
  </div>
  <div class="text-download">
    <p style=" font-family: 'Poppins', sans-serif;font-size: 18px; font-weight: 500;color:#EEEEEE;margin-top:5px;">Join premium with 434,849 creators.</p>
  </div>
</div>
<!--БЛОК CASTOMERS-->
<div class="container-castomers">
  <div class="text-castomers">
    <p style="margin-top:200px;font-family: 'Poppins', sans-serif;font-size: 14px; font-weight: 700;color:#F59E00;
;
margin-top:-35px;">TESTIMONIALS</p>
  </div>
  <div class="text-castomers">
    <p style="font-family: 'Poppins', sans-serif;font-size: 24px; font-weight: 600;color:#020D37;margin-top:-25px;">Hear good experiences from our customers</p>
  </div>
  <div class="blocks-castomers">
  <div   class="block-castomers">
    <img style="width: 40px;height: 40px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\ri_double-quotes-r.svg">
    <div class="text-font-Caption3-Medium">
      <p>The sounds from WavesCo is great and it really helps our team to save time and production costs.</p>
    </div>
    <img style="width: 90px;height: 80px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\Frame 45 (2).svg">
    <div class="text-font-Subtitle2-SemiBold">
      <p>Anne Joyce</p>
    </div>
    <div style="color:#ACAFB8;" class="text-font-Caption3-Medium">
      <p>Video editor at Dude Perfect</p>
    </div>
  </div>
    <div  class="block-castomers">
      <img style="width: 40px;height: 40px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\ri_double-quotes-r.svg">
    <div class="text-font-Caption3-Medium">
      <p>WavesCo was a great choice for our team for film production, the quality is amazingly great.</p>
    </div>
    <img style="width: 90px;height: 80px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\Frame 45 (1).svg">
    <div class="text-font-Subtitle2-SemiBold">
      <p>Edward Sann</p>
    </div>
    <div style="color:#ACAFB8;" class="text-font-Caption3-Medium">
      <p>Head of Video editor at Netflix</p>
    </div>
    </div>
    
    <div  class="block-castomers">
      <img style="width: 40px;height: 40px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\ri_double-quotes-r.svg">
    <div class="text-font-Caption3-Medium">
      <p> Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team.</p>
    </div>
    <img style="width: 90px;height: 80px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\Frame 45.svg">
    <div class="text-font-Subtitle2-SemiBold">
      <p>Ronn D.</p>
    </div>
    <div style="color:#ACAFB8;" class="text-font-Caption3-Medium">
      <p>Video Editor at PewDiePie</p>
    </div>
    </div>

  </div>
  <img style="width: 40px;height: 40px;margin-left:10px;" src="C:\Users\Никита\Practika\src\castomers img\Divider.svg">
  </div>
<!--БЛОК FOOTER-->
  <div class="container-footer">

  <div class="blocks-footer">
  <div style="width: 298px;height: 137px;"  class="block-footer">
    <img style="margin-right: 160px" src="C:\Users\Никита\Practika\src\Logo\WavesCo.svg">
    <div class="Caption2-Reguler">
      <p>WavesCo is a platform for providing premium sound effects for Youtube videos, movies and many more.</p>
    </div>
    <div style="text-align: left; color:#ACAFB8;" class="text-font-Caption3-Medium">
      <p>WavesCo ©2021, All rights reserved</p>
    </div>
  </div>
    <div  class="block-footer">
      <div style="color:#EEEEEE;size:18px;font-weight: 600;" class="Caption2-Reguler">
        Product
    </div>
    <div class="Caption2-Reguler">
      <p>Browse sounds</p>
      <p>Pricing</p>
      <p>FAQ</p>
      <p>Affiliate</p>
    </div>
    </div>
    <div  class="block-footer">
      <div style="color:#EEEEEE;size:18px;font-weight: 600;" class="Caption2-Reguler">
        Company
    </div>
    <div class="Caption2-Reguler">
      <p>Blog</p>
      <p>Abous us</p>
      <p>Help</p>
      <p>Career</p>
    </div>
    </div>
    <div  class="block-footer">
      <div style="color:#EEEEEE;size:18px;font-weight: 600;" class="Caption2-Reguler">
        Social Media
    </div>
    <div class="Caption2-Reguler">
      <p>Twitter</p>
      <p>Instagram</p>
      <p>Youtube</p>
      <p>Facebook</p>
    </div>

    </div>
  </div>

  </div>

 


</template>



