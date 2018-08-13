$(document).ready(function(){
    var isResize = false;

    //function for change Nav desktop - mobile and back
    changeNav();

    $( window ).resize(changeNav);

    function changeNav() {

        if ($('#mobile-header').css('display') == 'flex' && isResize == false) {
            $('#desktop-nav ul').appendTo('#mobile-nav');
            isResize = true;
        } else

            if ($('#mobile-header').css('display') == 'none' && isResize == true) {
            $('#mobile-nav ul').appendTo('#desktop-nav');
            isResize = false;
        };
    }

    // function for close nav
    $('#mobile-header .close').on('click', closeNav);

    function closeNav() {

        $('#mobile-nav').animate({
            'height': 0
        }, 500, 'swing',function () {
            $('#mobile-nav').css({display: 'none'});
        });
    }

    // function for open nav
    $('.toggle-button').on('click', openNav);

    function openNav() {

        $('#mobile-nav').css({height: 0});
        $('#mobile-nav').css({display: 'block'});
        $('#mobile-nav').animate({
            'height': '100vh'
        }, 500);
    }
});
