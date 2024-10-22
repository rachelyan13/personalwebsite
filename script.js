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
    document.getElementById('message').innerText = 'You found me 🥚!';

    // Retrieve the link's URL
    const url = event.currentTarget.href;

    // Open the link after a short delay
    setTimeout(function() {
        window.open(url, '_blank'); // Open the link in a new tab
    }, 1000); // Adjust delay (in milliseconds) as needed
  }