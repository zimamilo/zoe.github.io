function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showPetitionAlert() {
  alert("Thank you for standing with us! Redirecting to the global petition page...");

}

const soundBtn = document.getElementById('soundBtn');
const soundClip = document.getElementById('soundClip');

soundBtn.addEventListener('click', () => {
  soundClip.currentTime = 0;
  soundClip.play();
});


const orb = document.querySelectorAll('.orb');
const infoDisplay = document.getElementById('orbInfoDisplay');

orbs.forEach(orb => {
  orb.addEventListener('mouseover', () => {
    const info = orb.getAttribute('data-info');
  });

  orb.addEventListener('mouseout', () => {
    infoDisplay.textContent = "Hover over an orb to discover others comment...";
  });

  orb.addEventListener('click', () => {
    const soundId = orb.getAttribute('data-sound');
    const audio = document.getElementById(soundId);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});


