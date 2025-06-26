// ...existing code...

// Constants for heart icons
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Add event listeners after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Select all heart elements
  const hearts = document.querySelectorAll('.like-glyph');
  const modal = document.getElementById('modal');
  const modalMsg = document.getElementById('modal-message');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      // If heart is full, toggle back to empty
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

// Provided function: do not change
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

// ...existing code...