var link = document.querySelector(".write-us");
var popup = document.querySelector(".write-us-window");
var close = popup.querySelector(".close-button");
     
link.addEventListener("click", function(event) {
	event.preventDefault();
  popup.classList.add("write-us-window-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
  popup.classList.remove("write-us-window-show");
});

