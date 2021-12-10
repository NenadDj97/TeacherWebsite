 /* navbar sticky */
    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 610){
                $('.navbar').addClass("hidden");
            }else{
                $('.navbar.hidden').removeClass("hidden");
            }
            if(this.scrollY > 900){
                $('.navbar-sticky').addClass("shown");
            }
            else{
                $('.navbar-sticky.shown').removeClass("shown");
            }
        });
    });

/* FEEDBACK owl carousel script */

$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    nav:true,
    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '.carousel .custom-nav',
    responsive: {
        0:{
            items: 1
        },
        900:{
            items: 2
        },
        1500:{
            items: 3
        }
    }
});



    /* CONTACT submit button press */

$('button[type="submit"]').click(function(){
    $('form').addClass('submitted');
});

/* intro video controls */
var ninavidz = document.getElementById("introvid");

function enableControls() {
    if (!(ninavidz.controls = true)) {
        ninavidz.controls = true;
    }
    document.getElementById('triangle').style.opacity = "0";
    setTimeout(() => {document.getElementById('triangle').style.visibility = "hidden";}, 500);
    setTimeout(() => {ninavidz.play();}, 1000);
  }




