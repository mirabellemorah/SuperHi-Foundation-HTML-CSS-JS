// 1. when we scroll, we want to run a function
// 2 we want to figure out how far down the page we have scrolled
// 3. we want to display the pixels we've scrolled in the progress div

$(document).on("scroll", function () {

    var pixelsFromTop = $(document).scrollTop()

    $(".progress .bar").html(pixelsFromTop + " pixels from top");

    if (pixelsFromTop > 50) {
        $("header").addClass("hidden");
    } else {
        $("header").removeClass("hidden");
    }

    console.log("pixelsFromTop");

    if (pixelsFromTop < 400) {
        $("body").css("background-color", "#f9f8f0");

    } else if (pixelsFromTop < 900) {
        $("body").css("background-color", "yellow");
    }
    else if (pixelsFromTop < 1400) {
        $("body").css("background-color", "orange");
    }

    else {
        $("body").css("background-color", "red");
    }

    // here we join the number of % scrolled with % symbol otherwise 
    //assume we are talking about pixels


    var documentHeight = $(document).height();

    var windowHeight = $(window).height();

    var difference = documentHeight - windowHeight;

    var percentage = 100 * pixelsFromTop / difference;

    $(".bar").css("width", percentage + "%");

})
