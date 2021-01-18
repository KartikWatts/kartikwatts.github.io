/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {

    //init wow effects
    new WOW().init();

    //scroll menu
    $(window).scroll(function () {
        var mobile = $('.mobileapps').offset().top;
        var scroll1 = $(window).scrollTop();
        if (scroll1 >= 1400) {
            $('.mobileapps-sticky').css({"top": '0px'});
        } else {
            $('.mobileapps-sticky').css({"top": '-100px'});
        }
        return false;
    });
    
    $(window).scroll(function () {
        var web = $('.webapps').offset().top;
        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 4320) {
            $('.webapps-sticky').css({"top": '0px'});
        } else {
            $('.webapps-sticky').css({"top": '-100px'});
        }
        return false;
    });
    $(window).scroll(function () {
        var web = $('.pythonprojects').offset().top;
        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 9450) {
            $('.pythonprojects-sticky').css({"top": '0px'});
        } else {
            $('.pythonprojects-sticky').css({"top": '-100px'});
        }
        return false;
    });
    $(window).scroll(function () {
        var web = $('.creativecloud').offset().top;
        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 10900) {
            $('.creativecloud-sticky').css({"top": '0px'});
        } else {
            $('.creativecloud-sticky').css({"top": '-100px'});
        }
        return false;
    });
    $(window).scroll(function () {
        var web = $('.ccppcollection').offset().top;
        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 11700) {
            $('.ccppcollection-sticky').css({"top": '0px'});
        } else {
            $('.ccppcollection-sticky').css({"top": '-100px'});
        }
        return false;
    });
    $(window).scroll(function () {
        var web = $('.unitysector').offset().top;
        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 12400) {
            $('.unitysector-sticky').css({"top": '0px'});
        } else {
            $('.unitysector-sticky').css({"top": '-100px'});
        }
        return false;
    });
    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});