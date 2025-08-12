function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showPetitionAlert() {
  alert("Thank you for standing with Lisa! Redirecting to the global petition page...");
}

const soundBtn = document.getElementById('soundBtn');
const soundClip = document.getElementById('soundClip');

document.getElementById('soundClip').volume = 1;

soundBtn.addEventListener('click', () => {
  soundClip.currentTime = 0;
  soundClip.play();
});


const orbs = document.querySelectorAll('.orb');
const infoDisplay = document.getElementById('orbInfoDisplay');

orbs.forEach(orb => {
  orb.addEventListener('mouseover', () => {
    const info = orb.getAttribute('data-info');
    infoDisplay.textContent = ` Accessing Audio: ${info}...`;
  });
});

orb.addEventListener('mouseout', () => {infoDisplay.textContent = "Hover over an orb to discover others comment...";});

orb.addEventListener('click', () => {const soundId = orb.getAttribute('data-sound');
  const audio = document.getElementById(soundId);
  const info = orb.getAttribute('data-info');
  if (audio) {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  }
});

document.getElementById('orb1').volume = 1;
document.getElementById('orb2').volume = 1;
document.getElementById('orb3').volume = 1;

