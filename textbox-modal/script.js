let modal = document.getElementById("modalPop");
let btn = document.getElementById("modal-btn");

function showModal(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  console.log(event);
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
