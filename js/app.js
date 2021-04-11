jQuery(function ($) {

    //resetowanie scrolla
    $.scrollTo(0);

    $('#linkHome').click(function () { $.scrollTo($('#goToHome'), 500); })
    $('#linkAboutMe').click(function () { $.scrollTo($('#goToAboutMe'), 500); })
    $('#linkMyCompetences').click(function () { $.scrollTo($('#goToMyCompetences'), 1000); })
    $('#linkPortfolio').click(function () { $.scrollTo($('#goToPortfolio'), 1000); })
    $('#linkOffer').click(function () { $.scrollTo($('#goToOffer'), 1000); })
    $('#linkOfferButton').click(function () { $.scrollTo($('#goToOffer'), 1000); })
    $('#linkContact').click(function () { $.scrollTo($('#goToContact'), 1000); })

    $('.scrollUp').click(function () { $.scrollTo($('body'), 1000); })
}
);

//pokaż scrollUp jak strona zostanie przewinięta
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.scrollUp').fadeIn();
    } else {
        $('.scrollUp').fadeOut();
    }
}
);