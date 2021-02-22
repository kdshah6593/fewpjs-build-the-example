// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
hearts = document.querySelectorAll('.like-glyph')

for (const glyph of hearts) {
  glyph.addEventListener('click', liked)
} 

function liked(e) {
  let heart = e.target;
  mimicServerCall()
    .then(message => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = 'activated-heart'
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch(error => {
      let modal = document.getElementById('modal');
      let modalMessage = document.getElementById('modal-message');
      modal.classList.remove('hidden');
      modalMessage.innerText = error;
      setTimeout(function() {
        modal.className = 'hidden';
      }, 5000);
    })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
