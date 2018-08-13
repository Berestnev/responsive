$(document).ready(function () {
    var animationDelay = 5000;
    var scrollWidth = $('.mini-slide').outerWidth(true);//width of mini slide with margin

    //function for left button of mini slider
    $('#mslb').on('click', function () {

        clearTimeout(msInterval);

        $('.mini-slide').last().prependTo('.ms-list');

        $('.ms-list').css('left', '-335px');
        $('.ms-list').animate({left: 0}, 1000);

        msInterval = setTimeout(turnSlider, animationDelay);
    });

    //function for right button of mini slider
    $('#msrb').on('click', function () {

        clearTimeout(msInterval);

        $('.ms-list').animate({left: -scrollWidth}, 1000, function () {

            $('.mini-slide').first().appendTo('.ms-list');
            $('.ms-list').css('left', 0);
        });
        msInterval = setTimeout(turnSlider, animationDelay);
    });

    //function with time interval for change slide in mini slider
    var msInterval = setTimeout(turnSlider, animationDelay);

    function turnSlider() {

        $('.ms-list').animate({left: -scrollWidth}, 1000, function () {

            $('.mini-slide').first().appendTo('.ms-list');
            $('.ms-list').css('left', 0);
        });

        msInterval = setTimeout(turnSlider, animationDelay);
    }
});