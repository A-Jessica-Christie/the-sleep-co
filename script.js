// A $( document ).ready() block.
$( document ).ready(function() {


    $(".hamburger-button").click(function(){
        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
    })

    // Animate on Scroll activate
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false // whether animation should happen only once - while scrolling down
    });

    // Light Gallery Pop Up activate
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
    });

});