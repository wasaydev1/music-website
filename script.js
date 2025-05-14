// Elements ko select karna
let range = document.getElementById("range");
let rightArrow = document.getElementById("rightArrow");
let musicRight = document.getElementById("musicRight");
let playlist = document.getElementById("playlist")
let recentContainer = document.getElementById("recentContainer")
let imgs = document.getElementById("imgs")
let rightBar = document.getElementById("rightBar")
let appsleft = document.getElementById("appsleft")
let RecentHeading = document.getElementById("RecentHeading")
let playSong = document.getElementById("playSong");
let musicImage = document.getElementById("musicImage")
let popularContainer = document.getElementById("popularContainer")


// Music list
let audio = [
  {
    source: "./Ay Khatm e Rusul Maaki Madani - TUM SA KOI NAHI - Sibtain Haider - Ramzan Special 2022 - TNA RECORDS.mkv",
    title: "Ay Khatm e Rusul",
    artist: "Sibtain Haider",
    cover: "https://i.scdn.co/image/ab67616d0000b2733051a6e5d52beb4f5409fc0e"
  },
  {
    source: "./Ali_mola_ali_dam_dam_1080p.mp4",
    title: "Ali Mola Ali Dam Dam ",
    artist: "Sultan Ul Qadria Qawwal",
    cover: "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjLBJJHXuKR6rdqdUjtvkJCM_fHm19m9B0A&s"
  },
  {
    source: "./Tu Ne Diwana Banaya - (Raag.Fm).mp3",
    title: "Tu Ne Diwana Banaya ",
    artist: "Abida_Parven",
    cover: "data:image/jpeg;base64,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"
  },
  {
    source: "./balaghal_ula_be_kamalihi_abida_parveen 1080p.mp4",
    title: "balaghal_ula_be_kamalihi",
    artist: "abida_parveen",
    cover: "data:image/jpeg;base64,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"
  }
];
audio.map((pic) => {
  imgs.innerHTML += `
      <img src="${pic.cover}" alt="">
  `
})

// Pehla song set karna
let currentSong = 0;
let chlao = new Audio(audio[currentSong].source);

// Function jo song change karega
function changeSong(next = true) {
  if (next) {
    currentSong = (currentSong + 1) % audio.length; // Next song
  } else {
    currentSong = (currentSong - 1 + audio.length) % audio.length; // Previous song
  }

  // Audio source update karna
  chlao.src = audio[currentSong].source;

  // UI update karna
  updateUI();
}

audio.map((value) => {
  playlist.innerHTML += `
<div class="musicList" id="musicList">
 <img src="${value.cover}" alt="">
  <div class="content">
  <p>${value.title.slice(0, 15)}....</p>
  <p>${value.artist}</p>
  </div>
<div class="dot-icon">
  <i class="fas fa-ellipsis-v"></i>
     </div>
  </div>
  `
})
let currentAudio = null; // Global variable to store current playing audio
let currentElement = null; // Global variable to track current playing icon

audio.forEach((music, idx) => {
  recentContainer.innerHTML += `
    <div class="recent-paly-music">
      <div class="recent-music">
        <img src="${music.cover}" alt="">
      </div>
      <div class="music-name">
        <h3>${music.title.slice(0, 16)}....</h3>
        <p>${music.artist}</p>
      </div>
      <div class="icon-play">
        <i class="fas fa-play" onclick="abc('${music.source}', this)"></i>
      </div>
    </div>
  `;
});

function abc(source, element) {
  // Agar koi pehla gaana chal raha hai, usko pause karo aur uska icon change karo
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset audio to start
    if (currentElement) {
      currentElement.classList.remove("fa-pause");
      currentElement.classList.add("fa-play");
    }
  }

  // Agar same element pe click ho raha hai, to music ko stop kar do
  if (currentAudio && currentAudio.src === new Audio(source).src) {
    currentAudio = null;
    currentElement = null;
    return;
  }

  // Naya audio play karo
  currentAudio = new Audio(source);
  currentAudio.play();

  // Naye wale icon ko update karo
  element.classList.remove("fa-play");
  element.classList.add("fa-pause");

  // Store the current playing element
  currentElement = element;
}


// UI update function
function updateUI() {
  musicRight.innerHTML = `
    <div class="music-image">
      <img src="${audio[currentSong].cover}" alt="">
      <p>${audio[currentSong].title} - ${audio[currentSong].artist}</p>
      <div class="icons">
        <i class="fas fa-arrow-left" id="leftArrow" onclick="changeSong(false)"></i>
        <i class="fas fa-play" id="playIcon" onclick="togglePlay()"></i>
        <i class="fas fa-arrow-right" id="rightArrow" onclick="changeSong(true)"></i>
      </div>
      <div class="input">
        <input type="range" min="0" value="0" id="range">
      </div>
    </div>
  `;

  // Seek bar update karna
  range = document.getElementById("range");

  chlao.addEventListener("loadedmetadata", () => {
    range.max = chlao.duration;
  });

  chlao.addEventListener("timeupdate", () => {
    range.value = chlao.currentTime;
  });

  // Seek bar move hone par song ka time update hoga
  range.addEventListener("input", () => {
    chlao.currentTime = range.value;
  });
}

// Play/Pause function
function togglePlay() {
  let playIcon = document.getElementById("playIcon");

  if (chlao.paused) {
    chlao.play();
    playIcon.classList.replace("fa-play", "fa-pause");
  } else {
    chlao.pause();
    playIcon.classList.replace("fa-pause", "fa-play");
  }
}

// Pehle UI update karna
updateUI();




// toggle btn
let change = () => {
  let openNav = rightBar.style.left
  let leftSide = appsleft.style.width
  let RecentHead = RecentHeading.style.paddingLeft

  if (openNav.includes("-350px")) {
    rightBar.style.left = "0px"
  } else if (openNav.includes("0px")) {
    rightBar.style.left = "-350px"
  }
  else {
    rightBar.style.left = "0px"
  }

  if (leftSide.includes("20%")) {
    appsleft.style.width = "0%"
  } else if (leftSide.includes("20%")) {
    appsleft.style.width = "0%"
  } else {
    appsleft.style.width = "20%"
  }

}
audio.forEach((musicImg) => {
  musicImage.innerHTML += `
  <img src="${musicImg.cover}" alt="">
  `

})
let activeAudio = null; // Current playing audio
let activeButton = null; // Current playing button

audio.map((value, index) => {
  playSong.innerHTML += `
    <div class="main-cont">
        <div class="icon">
            <i class="fas fa-play" id="playPause${index}" onclick="plyPause('${value.source}', ${index})"></i>
        </div>
        <div class="imgs">
            <img src="${value.cover}" alt="...loading">
        </div>
        <div class="article">
            <p>${value.title.slice(0, 15)}....</p>
            <p>${value.artist}</p>
        </div>
        <i class="fas fa-heart"></i>
    </div>
  `;
});

function plyPause(song, index) {
  let playPauseBtn = document.getElementById(`playPause${index}`);

  // Agar koi song play ho raha hai, to pehle use pause karo
  if (activeAudio) {
    activeAudio.pause();
    activeButton.classList.remove("fa-pause");
    activeButton.classList.add("fa-play");

    // Agar wahi song dobara click ho, to function end kar do (toggle effect)
    if (activeAudio.src === new Audio(song).src) {
      activeAudio = null;
      activeButton = null;
      return;
    }
  }

  // Naya song play karo
  activeAudio = new Audio(song);
  activeAudio.play();
  activeButton = playPauseBtn;

  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");

  // Jab song khatam ho, icon wapas play par aajai
  activeAudio.onended = () => {
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
    activeAudio = null;
    activeButton = null;
  };
}

let trendSong = null;
let trendBtn = null;

audio.map((vlue, id) => {
  popularContainer.innerHTML += `
                                    <div class="trending-song">
                                        <div class="img-btn">
                                            <img src="${vlue.cover}" alt="">
                                            <i class="fas fa-play" id="tren${id}" onclick="trendPlay('${vlue.source}',${id})"></i>
                                        </div>
                                        <div class="trending-song-name">
                                            <p>${vlue.title.slice(0, 10)}...</p>
                                            <p>${vlue.artist}</p>
                                        </div>
                                    </div>
  
  `
})


function trendPlay(song, index) {
  let tren = document.getElementById(`tren${index}`);

  // Agar koi song play ho raha hai, to pehle use pause karo
  if (trendSong) {
    trendSong.pause();
    trendBtn.classList.remove("fa-pause");
    trendBtn.classList.add("fa-play");

    // Agar wahi song dobara click ho, to function end kar do (toggle effect)
    if (trendSong.src === new Audio(song).src) {
      trendSong = null;
      trendBtn = null;
      return;
    }
  }

  // Naya song play karo
  trendSong = new Audio(song);
  trendSong.play();
  trendBtn = tren;

  tren.classList.remove("fa-play");
  tren.classList.add("fa-pause");

  // Jab song khatam ho, icon wapas play par aajai
  trendSong.onended = () => {
    tren.remove("fa-pause");
    tren.classList.add("fa-play");
    trendSong = null;
    trendBtn = null;
  };
}
