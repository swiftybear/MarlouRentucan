document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    document.querySelector(".container").classList.add("logged-in");
    document.querySelector(".app").style.transform = "scale(1)";
  });
  
  document.querySelector(".logout-button").addEventListener("click", function () {
    document.querySelector(".container").classList.remove("logged-in");
    document.querySelector(".app").style.transform = "scale(0)";
  });