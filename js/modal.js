// Get the modal
const modal = document.getElementById("modal");
const spanClose = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", () => {
  load();
});

function load() {
    spanClose.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	 }
}