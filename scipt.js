// in single product page
// if any one click on small images will be replaced with big one
var main_img = document.getElementById("main-img");
        var small_img = document.getElementsByClassName("small-img");
        small_img[0].onclick = function() {
            main_img.src = small_img[0].src;
        }
        small_img[1].onclick = function() {
            main_img.src = small_img[1].src;
        }
        small_img[2].onclick = function() {
            main_img.src = small_img[2].src;
        }
        small_img[3].onclick = function() {
            main_img.src = small_img[3].src;
        }