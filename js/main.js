$(".cooperation-arrow").click(function () {
    $('html,body').animate({
            scrollTop: $(".services").offset().top - 190
        },
        'slow');
});