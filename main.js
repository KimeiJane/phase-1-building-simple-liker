const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const hearts = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        modal.classList.remove('hidden');
        modalMessage.textContent = error;
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Provided function to simulate server call
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
