$(document).ready(function() {
    $(".show-filters").on("click", function () {

        if ($(".filters-list").is(":visible")) {
            $(".filters-list").slideUp(400);
            $(".show-filters").text("Show filters");
        } else {
            $(".filters-list").slideDown();
            $(".show-filters").text("Hide filters");
        }

        return false;
    });

    $(".filters-list a").on("click", function () {
        // get the value of the data filter attribute
        var filter = $(this).attr("data-filter");

        $(".product").hide();
        $(filter).show();

        $(".filters-list a").removeClass("selected");
        $(this).addClass("selected");

        return false;
    });
});


