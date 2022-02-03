//https://www.w3schools.com/howto/howto_css_modal_images.asp

// Get the modal
var modal = document.getElementById("myModal");
let modalImg = document.getElementById('img01');
var captionText = document.getElementById("caption");

let items = document.getElementsByClassName('filterDiv');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {

        let imgsrc = items[i].getElementsByClassName('myImg')[0].src;
        let imgcaption = items[i].getElementsByClassName('myImg')[0].alt;

        modal.style.display = "block";
        modalImg.src = imgsrc;
        captionText.textContent = imgcaption;

        //console.log(modalImg);

    }, true);
}
// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $('.myImg');
// var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
// $('.myImg').click(function () {
//     modal.style.display = "block";
//     var newSrc = this.src;
//     modalImg.attr('src', newSrc);
//     captionText.innerHTML = this.alt;
// });


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Close
span.onclick = function () {
    modal.style.display = "none";
}