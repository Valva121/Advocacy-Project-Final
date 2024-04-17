let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () =>
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

themeButton.addEventListener("click", toggleDarkMode);

// AUTOMATIC SLIDESHOW AKA IT MOVES BY ITSELF//
//DYNAMIC SLIDESHOW//
document.addEventListener('DOMContentLoaded', function() {
  showSlides();
});

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4500); // Change image every 4.5 seconds
}

/*----------------------------------------------------------------------*/
/*-----This is the back to top button--->*/

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('back-to-top-btn');

  // Show the button when user scrolls down 20px from the top of the document
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  };

  // Scroll to the top of the document when button is clicked
  btn.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
// Define a function to toggle the modal
function toggleModal(person) {
    const modal = document.querySelector('.thanks-modal');
    const modalContent = document.querySelector('.thanks-content-modal');
    modal.style.display = 'flex';

    // Construct the thank you message
    const thankYouMessage = `Thank you, ${person.name}, for signing the petition!`;

    // Set the text content of the modal
    modalContent.textContent = thankYouMessage;

    // Hide the modal after a few seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 4000); // Hide after 4 seconds (4000 milliseconds)
}

// Count variable to keep track of the number of signatures
let count = 3;

// Add your query for the sign now button here
const signNowButton = document.getElementById('sign-now-button');

const addSignature = () => {
  // Get the name, hometown, and email values from the form
  const name = document.querySelector('#petition2 input[name="name"]').value;
  const hometown = document.querySelector('#petition2 input[name="hometown"]').value;
  console.log(name, hometown);

  // Increment the signature count
  count++;

  // Remove existing counter element
  const oldCounter = document.getElementById('counter');
  oldCounter.remove();

  const signaturesSection = document.querySelector('.signatures');


  // Create a new paragraph element for the signature
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;
  signaturesSection.appendChild(newSignature);

  // Create a new counter element
  const counter = document.createElement('p');
  counter.id = 'counter';
  counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  // Append the counter to the signatures div
  signaturesSection.appendChild(counter);
}

// TODO: Complete validation form
const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition2").elements;

  const person = {
    name: petitionInputs.name.value,
    hometown: petitionInputs.hometown.value,
    email: petitionInputs.email.value
  };

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // If there are no Errors, add the signature and clear the form fields
  if (!containsErrors) {
    addSignature(); // Add the signature
    document.getElementById("sign-petition2").reset();
  }
}

// Add a click event listener to the sign now button here
signNowButton.addEventListener('click', validateForm);
//

// Scroll Animation //
let animation = {
  revealDistance : 150,
  initialOpacity : 0,
  transitionDelay : 0,
  transitionDuration : '2s',
  transitionProperty : 'all',
  transitionTimingFunction : 'ease'
};
/// ADD fade animation to Header, Slideshow,Content Sections: Fade in the content sections (e.g., "About My Topic," "What is Immigration," "The Assumptions," etc.) as they become visible while scrolling down the page. As well as the Footer and Back-to-the top button///
///
let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  let windowHeight = window.innerHeight;

  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

document.addEventListener("DOMContentLoaded", function() {
  // Get the sign now button element
  const signNowButton = document.getElementById('sign-now-button');

  // Get the modal element
  const modal = document.getElementById('thanks-modal');

  // Get the <span> element that closes the modal
  const closeModalButton = document.getElementById('close-modal-button');

  // When the user clicks the button, open the modal
  signNowButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // When the user clicks on <span> (x), close the modal
  closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
