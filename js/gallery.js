document.addEventListener("DOMContentLoaded", function () {

const images = document.querySelectorAll(".productCard img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
<span id="closeLightbox">&times;</span>
<img id="lightboxImage">
`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeLightbox");

images.forEach(image => {

image.addEventListener("click", function () {

lightbox.style.display = "flex";
lightboxImage.src = this.src;

});

});

closeBtn.onclick = function () {

lightbox.style.display = "none";

}

lightbox.onclick = function(e){

if(e.target===lightbox){

lightbox.style.display="none";

}

}

});