$(document).ready(function() {
    $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 50) {
    $(".navbar-fixed-top").addClass("js-scrolling");
    $(".navbar-brand").addClass("js-scrolling");
    } else {
    $(".navbar-fixed-top").removeClass("js-scrolling");
    $(".navbar-brand").removeClass("js-scrolling");
    }
    });
    });
    