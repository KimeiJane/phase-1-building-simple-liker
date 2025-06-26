// Constants for heart icons
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Select all heart elements
  const hearts = document.querySelectorAll('.like-glyph');
  // Select the error modal and its message span
  const modal = document.getElementById('modal');
  const modalMsg = document.getElementById('modal-message');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      // If heart is already activated, "unlike" it
      if (heart.classList.contains('activated-heart')) {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      } else {
        // Simulate server call
        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          })
          .catch(error => {
            modal.classList.remove('hidden');
            modalMsg.textContent = error;
            setTimeout(() => {
              modal.classList.add('hidden');
            }, 3000);
          });
      }
    });
  });
});

// Provided function to simulate server call
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}