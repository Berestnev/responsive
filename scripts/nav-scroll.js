$(document).ready(function(){

    //function for scroll nav
    $('#first-screen a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var idTarget = this.hash;
        var target = $(idTarget);
        var mHDisplay = $('#mobile-nav').css('display');


        $('html, body').animate({
            'scrollTop': target.offset().top
        }, 1000, 'swing');

        //if it is mobile-nav - by click on some title close nav

        if (mHDisplay == 'block') {
            $('#mobile-nav').animate({
                'height': 0
            }, 500, function () {
                $('#mobile-nav').css({display: 'none'});
            });
        }
    });
});