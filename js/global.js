function getEnvironment(url) {
    var env = "Production";
    if (url.indexOf("localhost") > -1) {
        env = "LOCALHOST";
    }
    else if (url.indexOf("ldpww00a0069") > -1 || url.indexOf("ldpww00a0070") > -1 || url.indexOf("ldpww00a0071") > -1) {
        env = "CDEV";
    }
    else if (url.indexOf("eai-ist") > -1 || url.indexOf("lspwa00a0089") > -1 || url.indexOf("lspwa00a0090") > -1 || url.indexOf("lspwa00a0091") > -1 || url.indexOf("lspwa00a0092") > -1 || url.indexOf("lspwa00a0093") > -1 || url.indexOf("lspwa00a0094") > -1) {
        env = "IST";
    }
    else if (url.indexOf("eai-et") > -1 || url.indexOf("lnpww00a0003") > -1 || url.indexOf("lnpww00a0004") > -1) {
        env = "ET";
    }
    return env;
}

function loaderOff() {
    $(".bg-load").show();
    $(".bg-load-wrapper").show();
}

function loaderOn() {
    $(".bg-load").fadeOut("slow");
    $(".bg-load-wrapper").fadeOut("slow");
}

function scrollToTop() {
    verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
}

$(function () {
    console.log("ready!");
    var dateStamp = new Date();

    //footer date/time stamps
    $('.footer .txt-curr-year').text((new Date).getFullYear());
    $('.footer .txt-datestamp').livestamp(dateStamp.toISOString());//use account last modified date
    $('.footer .txt-domain-url').text(window.location.protocol + '//' + window.location.host);
    $('.footer .txt-timestamp').text(dateStamp);
    $('.footer .txt-env').text(getEnvironment(window.location.href));


    //header nav mega-menu
    //$("#header .dropdown").hover(
    //    function () {
    //        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
    //        $(this).toggleClass('open');
    //    },
    //    function () {
    //        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
    //        $(this).toggleClass('open');
    //    }
    //);

    //animation handler
    $('[data-animation-delay]').each(function () {
        var animationDelay = $(this).data("animation-delay");
        $(this).css({
            "-webkit-animation-delay": animationDelay,
            "-moz-animation-delay": animationDelay,
            "-o-animation-delay": animationDelay,
            "-ms-animation-delay": animationDelay,
            "animation-delay": animationDelay
        });
    });
    $('[data-animation]').each(function () {
        $(this).animate({opacity: '1'}).addClass("animated " + $(this).data("animation"));
    });

    //Scroll2Top Handler
    $(document).on('scroll', function () {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);
});