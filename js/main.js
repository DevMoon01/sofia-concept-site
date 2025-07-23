


// NEW CODE HERE
var time = 179;
var btn1 = $("#btn1");
var btn2 = $("#btn2");
var btn3 = $("#btn3");

var b1 = true;
var b2 = false;
var b3 = false;

var hlL = $(".hl-left");
var hlC = $(".hl-center");
var hlR = $(".hl-right");

var cover = $(".cover-container");

// Button 1
btn1.click(function () {
    b1 = true;

    if (b2 == true && b3 == false) {

        hlC.toggleClass("hl-center-2");
        hlL.toggleClass("hl-left-1");
        cover.toggleClass("cover-c").toggleClass("cover-l");
        setTimeout(function () {
            hlC.toggleClass("hl-center-2");
        }, time);

        // Declare new conditions
        b2 = false;
        b3 = false;

        // Change text colour
        $(".btn").not(this).removeClass("btn-hled");
        $(this).addClass("btn-hled");

    } else if (b2 == false && b3 == true) {

        hlC.toggleClass("hl-center-3");
        hlL.toggleClass("hl-left-2");
        cover.toggleClass("cover-r").toggleClass("cover-l");
        setTimeout(function () {
            hlC.toggleClass("hl-center-3");

        }, time);

        // Declare new conditions
        b2 = false;
        b3 = false;

        // Change text colour
        $(".btn").not(this).removeClass("btn-hled");
        $(this).addClass("btn-hled");
    }
    return b1;
});


// Button 2
btn2.click(function () {
    b2 = true;

    if (b1 == true && b3 == false) {

        hlC.toggleClass("hl-center-2");
        cover.toggleClass("cover-l").toggleClass("cover-c");
        setTimeout(function () {
            hlL.toggleClass("hl-left-1");
            hlC.toggleClass("hl-center-2");
        }, time);

        // Declare new conditions
        b1 = false;
        b3 = false;

        // Change text colour
        $(".btn").not(this).removeClass("btn-hled");
        $(this).addClass("btn-hled");

    } else if (b1 == false && b3 == true) {
        hlC.toggleClass("hl-center-2");
        hlL.toggleClass("hl-left-1").toggleClass("hl-left-2");
        cover.toggleClass("cover-r").toggleClass("cover-c");
        setTimeout(function () {
            hlC.toggleClass("hl-center-2");
        }, time);

        // Declare new conditions
        b1 = false;
        b3 = false;

        // Change text colour
        $(".btn").not(this).removeClass("btn-hled");
        $(this).addClass("btn-hled");
    }
    return b2;
});

// Button 3
btn3.click(function () {
    b3 = true;

    if (b1 == true && b2 == false) {

        hlC.toggleClass("hl-center-3");
        cover.toggleClass("cover-l").toggleClass("cover-r");
        setTimeout(function () {
            hlL.toggleClass("hl-left-2");
            hlC.toggleClass("hl-center-3");
        }, time);

        // Declare new conditions
        b1 = false;
        b2 = false;

        // Change text colour
        $(".btn").not(this).removeClass("btn-hled");
        $(this).addClass("btn-hled");

    } else if (b1 == false && b2 == true) {
        hlC.toggleClass("hl-center-2");
        cover.toggleClass("cover-c").toggleClass("cover-r");
        setTimeout(function () {
            hlL.toggleClass("hl-left-1").toggleClass("hl-left-2");
            hlC.toggleClass("hl-center-2");
        }, time);

        // Declare new conditions
        b1 = false;
        b2 = false;

        // Change text colour
        $(".btn").not(this).removeClass("btn-hled");
        $(this).addClass("btn-hled");
    }
    return b3;
});


// Feedback
$(".nav-container").click(function (e) {
    var parentOffset = $(this).offset();
    var dot = 20;
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    var X = parseInt(relX, 10);
    var Y = parseInt(relY, 10);


    if (X >= 0 && X <= 400 && Y >= 0 && Y <= 55) {
        $(".feedback").transition({
            y: Y - dot * 1.5,
            x: X - dot * 1.3
        }, 0, "snap");

        $(".fb-wv-1").addClass("fb-wv-1-a");
        setTimeout(function () {
            $(".fb-wv-1").removeClass("fb-wv-1-a");
        }, 499);
    }

});