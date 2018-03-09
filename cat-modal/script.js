var modal = document.getElementById('modalPop');
var img;
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

function setImg(){
  e = window.event;
  if(e.path[0].localName == 'img'){
    let cat = e.path[0].id;
    img = document.querySelector("#" + cat)
    modal.style.display = "block";
    modalImg.style.opacity = 1;
    modalImg.src = e.path[0].currentSrc;
    captionText.innerHTML = e.path[0].alt;
    modalImg.style.width = "35%";
  }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

captionText.onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(event) {
  console.log(event);
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
