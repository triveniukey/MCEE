
  // Force enable right click
  document.addEventListener("contextmenu", function(e) {
    e.stopPropagation(); // kisi aur script ko block karne se roke
  }, true);

  // Force enable F12 and inspect keys
  document.addEventListener("keydown", function(e) {
    e.stopPropagation();
  }, true);




  