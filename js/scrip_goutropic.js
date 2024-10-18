document.addEventListener("DOMContentLoaded", function() {
    var scrollArrow = document.getElementById("scroll-arrow");

    if (scrollArrow) {

        scrollArrow.addEventListener("click", function(event) {

            event.preventDefault();


            var mainSection = document.getElementById("main");


            if (mainSection) {

                mainSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {

            const rangeInput = document.getElementById('rangeInput');
            const outputValue = document.getElementById('outputValue');

            rangeInput.addEventListener('input', function () {
  
                outputValue.textContent = rangeInput.value;
            });
});


function scrollToTop() {
           
    window.scroll({
        top: 0,
        behavior: 'smooth'
            });
        }
        
       
window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollToTopButton = document.querySelector('.scroll-to-top');
        
            if (scrollPosition > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        };
