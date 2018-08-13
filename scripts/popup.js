$(document).ready(function(){

    var wHeight = $('body').height();
    var wWidth = $('body').width();
    var time = 500;

    //sizes for popup
    $('#popup').css({width: wWidth, height: wHeight});

    //function close() - for close popup by click on button "Close" or "X"
    $('.cls').on('click', close);

    //function open() - for open popup by click on button "Popup"
    $('.popup-button').on('click', open);

    //function  changePopup() - for button "subbmit"
    $('.i-submit').on('click', changePopup);

    popupDisplayNone();
    function close() {

        $('#popup').css({display: 'none'});
        $('html, body').animate({
            'scrollTop': 0
        }, 1000, 'swing');

        //проверка скрытости контента попапа (This is popup)
        if ( $(window).width() <= 1024 ) {
            if ( $('.popup-wrapper .form').hasClass('display-none') ) {
                $('.popup-wrapper .form').toggleClass('display-none');
                $('.popup-wrapper .popup').toggleClass('display-none');
            }
        }
    }

    function open() {
        $('#popup').css({display: 'block'});

        var halfBodyHeight = $('body').height() / 2;
        var halfWindowHeight = ($(window).height() / 2);
        var halfScroll = halfBodyHeight - halfWindowHeight;

        $('html, body').animate({
            'scrollTop': halfScroll
        }, 1000, 'swing');
    }

    //if screen width are mobile/tablet width - change popup content
    function popupDisplayNone() {

        if ($(window).width() <= 1024) {
            $('.popup-wrapper .form').toggleClass('display-none');
            $('.popup-wrapper .popup').toggleClass('display-none');
        }
    }

    function changePopup(e) {

        e.preventDefault();

        $('.popup-wrapper').fadeOut(time, function () {
            $('.popup-wrapper .form').toggleClass('display-none');
            $('.popup-wrapper .popup').toggleClass('display-none');
            $('.popup-wrapper').fadeIn(time);
        });
    }
});