$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navigationbar on scroll script
        if(this.scrollY > 20){
            $('.navigationbar').addClass("sticky");
        }else{
            $('.navigationbar').removeClass("sticky");
        }
        
    });

    // slide-up script
    $('.ScrollButton').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navigationbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navigationbar script
    $('.menubutton').click(function(){
        $('.navigationbar .menu').toggleClass("active");
        $('.menubutton i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["A Final year Student.", "An Undergraduate Fresher.", "A Software Developer.", "A Web Developer.", "A C++ Programmer."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
     // owl carousel script
     $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

