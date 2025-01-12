$(".showFilters").on("click", function () {

    // when our nav is expanded collapse it
    //change text of show filters to show filers (huh?)
    //otherwise if the nav is collapsed expand it
    //change the text to say hide filters

    if ($(".filtersList").is(":visible")) {
        $(".filtersList").slideUp(400);
        $(".showFilters").text("Show filters");
    }

    else {
        $(".filtersList").slideDown(400);
        $(".showFilters").text("Hide filters");
    }

    //this blocks the link from following the href

    return false;
});

$(".filtersList a").on("click", function () {

    var filter = $(this).attr("data-filter");

    console.log(filter);

    //hide all the products
    //show all the products that have the class of the filter
    //if the filter is all show all the products
    //otherwise show the products that have the class of the filter

    $(".product").hide();
    $(filter).show();

    //and remove it from the other links
    //will add the selected class to the link that was clicked

    $(".filtersList a").removeClass("selected");
    $(this).addClass("selected");

    //this blocks the link from following the href

    return false;

});