$(document).ready(function () {
    var delayTime = 800;
    var currentSlide = 0;
    var animationDelay = 10000;
    var imgs = $('.full-slider-img');
    var numOfSlides = $('.full-slider-img').length;
    var points = $('.point');//wrapper for points


    var sliderInterval = setTimeout(showNextSlide, animationDelay);//time out for change slide function

    //add points fory
    for (var i = 0; i < numOfSlides; i++) {

        if (i == 0) {
            $('#points').append('<div class="point bgc" data-num="' + i + '" ></div>');
        } else {
            $('#points').append('<div class="point" data-num="' + i + '" ></div>');
        }
    };

    //function with time interval for change slide in full slider
    function showNextSlide() {
        var imgs = $('.full-slider-img');
        $('.popup-block .content').fadeOut(delayTime);
        imgs.eq(currentSlide).fadeOut(delayTime, function () {
            $('.point').eq(currentSlide).toggleClass('bgc');
            currentSlide++;
            if(currentSlide > imgs.length - 1) {
                currentSlide = 0;
            }
            imgs.eq(currentSlide).fadeIn(delayTime);
            $('.popup-block .content').fadeIn(delayTime);
            $('.point').eq(currentSlide).toggleClass('bgc');
        });
        sliderInterval = setTimeout(showNextSlide, animationDelay);
    }

    //function for left button of full slider
    $('#fslb').on('click', function () {

        clearTimeout(sliderInterval);

        $('.popup-block .content').fadeOut(delayTime);

        imgs.eq(currentSlide).fadeOut(delayTime, function () {

            $('.point').eq(currentSlide).toggleClass('bgc');
            currentSlide--;

            if(currentSlide < 0) {
                currentSlide = imgs.length - 1;
            }

            imgs.eq(currentSlide).fadeIn(delayTime);

            $('.popup-block .content').fadeIn(delayTime);

            $('.point').eq(currentSlide).toggleClass('bgc');
        });
        sliderInterval = setTimeout(showNextSlide, animationDelay);
    });

    //function for right button of full slider
    $('#fsrb').on('click', function () {

        clearTimeout(sliderInterval);

        $('.popup-block .content').fadeOut(delayTime);

        imgs.eq(currentSlide).fadeOut(delayTime, function () {

            $('.point').eq(currentSlide).toggleClass('bgc');
            currentSlide++;

            if(currentSlide > imgs.length - 1) {
                currentSlide = 0;
            }

            imgs.eq(currentSlide).fadeIn(delayTime);

            $('.popup-block .content').fadeIn(delayTime);

            $('.point').eq(currentSlide).toggleClass('bgc');
        });

        sliderInterval = setTimeout(showNextSlide, animationDelay);
    });

    //function for click by point and show other slide
    $('.point').on('click', showThisSlide);

    function showThisSlide(event) {

        clearTimeout(sliderInterval);

        $('.popup-block .content').fadeOut(delayTime);

        imgs.eq(currentSlide).fadeOut(delayTime, function () {

            $('.point').eq(currentSlide).toggleClass('bgc');

            currentSlide = $(event.target).attr('data-num');

            imgs.eq(currentSlide).fadeIn(delayTime);

            $('.popup-block .content').fadeIn(delayTime);

            $('.point').eq(currentSlide).toggleClass('bgc');
        });

        sliderInterval = setTimeout(showNextSlide, animationDelay);
    }
});