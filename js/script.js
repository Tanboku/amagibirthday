document.addEventListener('DOMContentLoaded', function() {
  // 页面加载动画
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  
  // 模拟加载过程
  setTimeout(() => {
    loader.classList.add('opacity-0');
    setTimeout(() => {
      loader.style.display = 'none';
      content.classList.add('opacity-100');
    }, 500);
  }, 1500);
  
  // 音频控制
  const audioControl = document.getElementById('audioControl');
  const audioIcon = document.getElementById('audioIcon');
  const birthdayMusic = document.getElementById('birthdayMusic');
  
  audioControl.addEventListener('click', function() {
    if (birthdayMusic.paused) {
      birthdayMusic.play();
      audioIcon.classList.remove('fa-music');
      audioIcon.classList.add('fa-volume-up');
    } else {
      birthdayMusic.pause();
      audioIcon.classList.remove('fa-volume-up');
      audioIcon.classList.add('fa-music');
    }
  });
  
  // 视频播放控制
  const playButton = document.getElementById('playButton');
  const birthdayVideo = document.getElementById('birthdayVideo');
  
  playButton.addEventListener('click', function() {
    birthdayVideo.play();
    playButton.style.display = 'none';
  });
  
  birthdayVideo.addEventListener('play', function() {
    playButton.style.display = 'none';
  });
  
  birthdayVideo.addEventListener('pause', function() {
    playButton.style.display = 'flex';
  });
  
  birthdayVideo.addEventListener('ended', function() {
    playButton.style.display = 'flex';
  });
  
  // 开始旅程按钮
  const startJourney = document.getElementById('startJourney');
  const restartJourney = document.getElementById('restartJourney');
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  if (startJourney) {
    startJourney.addEventListener('click', function() {
      const nextSection = document.getElementById('cover').nextElementSibling;
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
  
  if (restartJourney) {
    restartJourney.addEventListener('click', scrollToTop);
  }
  
  // 创建气球效果
  function createBalloons() {
    const balloonsContainer = document.getElementById('balloons');
    const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFEA00', '#FFC107', '#FF9800', '#FF5722'];
    
    for (let i = 0; i < 20; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.animationDelay = `${Math.random() * 5}s`;
      balloon.style.animationDuration = `${10 + Math.random() * 10}s`;
      balloonsContainer.appendChild(balloon);
    }
  }
  
  // 页面滚动效果
  const sections = document.querySelectorAll('section');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const triggerBottom = window.innerHeight * 0.8;
      
      if (window.scrollY > sectionTop - triggerBottom && window.scrollY < sectionTop + sectionHeight) {
        section.classList.add('opacity-100');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  
  // 初始化
  checkScroll();
  createBalloons();
  
  // 随机播放生日快乐歌
  const birthdaySongs = [
    'audio/birthday.mp3',
    // 可以添加更多歌曲
  ];
  
  // 随机选择一首歌曲
  const randomSongIndex = Math.floor(Math.random() * birthdaySongs.length);
  birthdayMusic.src = birthdaySongs[randomSongIndex];
  
  // 预加载音频
  birthdayMusic.load();
  
  // 自动播放音频（某些浏览器可能会阻止自动播放）
  birthdayMusic.play().catch(e => {
    console.log('浏览器阻止了自动播放:', e);
  });
});
    