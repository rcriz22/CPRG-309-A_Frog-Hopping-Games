const container = document.querySelector('.container');

// To make 16 water tiles
for (let i = 0; i < 16; i++) {
  const pond = document.createElement('div');
  pond.classList.add('pond');

    // This section is to put water video as my background
        // const video = document.createElement('video');
        // video.classList.add('pondBG');
        // video.src = "./Assets/WaterPond.mp4";
        // video.autoplay = true;
        // video.loop = true;
        // video.muted = true;
        // video.playsInline = true;
        // pond.appendChild(video);

// This is for my lilypad
    const lilypad = document.createElement('img');
    lilypad.classList.add('lilypad');
    lilypad.src ='./Assets/LilyPads.png';
    
    pond.appendChild(lilypad);
    container.appendChild(pond);
    }

// This is for my frog
let frogPosition = 0; 
const pond = document.querySelectorAll('.pond');

const frog = document.createElement('img');
frog.classList.add('frog');
frog.src = "./Assets/Froggy1.png";

pond[frogPosition].appendChild(frog);


// This section is the behavior of my frog
document.addEventListener('keydown', (event) => {
  const key = event.key;
 
  pond[frogPosition].removeChild(frog);
  

  switch (key) {
    case 'ArrowUp':
      if (frogPosition >= 4) frogPosition -= 4;
      break;
    case 'ArrowDown':
      if (frogPosition <= 11) frogPosition += 4;
      break;
    case 'ArrowLeft':
      if (frogPosition % 4 !== 0) frogPosition -= 1;
      break;
    case 'ArrowRight':
      if (frogPosition % 4 !== 3) frogPosition += 1;
      break;
  }
    pond[frogPosition].appendChild(frog);
 
});
