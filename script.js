document.addEventListener("DOMContentLoaded", function() {
    const loadingText = document.querySelector('#loading-screen p');
    loadingText.textContent = '';

    gsap.to(loadingText, {
      duration: 2, 
      text: {
        value: "Loading..."
      },
      ease: "none",
      repeat: -1, 
      repeatDelay: 1, 
      yoyo: true 
    });
  });


  window.onload= function() {
    setInterval(function() {
        document.querySelector(".container").style.display = "block";
        document.getElementById("loading-screen").style.display = "none";
    },3000)
  }