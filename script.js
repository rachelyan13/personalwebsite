// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});  

function showMessage(event) {
  event.preventDefault(); // Prevent the default link action
  
  // Show the message
  const messageElement = document.getElementById('message');
  messageElement.innerText = 'You found me 🥚!';
  messageElement.style.display = 'block';

  // Retrieve the link's URL
  const url = event.currentTarget.href;

  // Open the link after a short delay
  setTimeout(function() {
      window.open(url, '_blank'); // Open the link in a new tab
      messageElement.style.display = 'none'; // Hide the message after opening
  }, 1500); // Adjust delay (in milliseconds) as needed
}

// Attach the event listener to the GitHub link
document.getElementById('github-link').addEventListener('click', showMessage);
