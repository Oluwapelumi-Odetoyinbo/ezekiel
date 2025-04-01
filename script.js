document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const quoteElement = document.getElementById("loadingQuote");
    const counterElement = document.getElementById("loadingCounter");
  
    // Random quotes array
    const quotes = [
      "Design is not just what it looks like, design is how it works. — Steve Jobs",
      "The only limit to our realization of tomorrow is our doubts of today. — FDR",
      "Every artist was first an amateur. — Ralph Waldo Emerson",
      "Simplicity is the ultimate sophistication. — Leonardo da Vinci"
    ];
  
    // Display random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
  
    // Countdown timer (30 seconds)
    let secondsLeft = 10;
    counterElement.textContent = `Loading... ${secondsLeft}s`;
  
    const interval = setInterval(() => {
      secondsLeft--;
      counterElement.textContent = `Loading... ${secondsLeft}s`;
      if (secondsLeft <= 0) {
        clearInterval(interval);
        loader.style.display = "none";
        content.style.display = "block";
      }
    }, 1000);
  
    // Your existing modal/navbar code below...
    const modal = document.getElementById("readMoreModal");
    const btn = document.querySelector(".btn");
    const closeBtn = document.querySelector(".close-btn");
  
    if (btn && modal && closeBtn) {
      btn.addEventListener("click", () => modal.style.display = "flex");
      closeBtn.addEventListener("click", () => modal.style.display = "none");
      window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    }
  
    // Navbar toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector(".navbar");
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  });