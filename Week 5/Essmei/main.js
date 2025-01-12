// This line sets up a click event listener on elements with the class "showFilters"
$(".showFilters").on("click", function () {

    // This comment explains that if the navigation is expanded, it will collapse it
    // and change the text of the "showFilters" button to "Show filters"
    // Otherwise, if the navigation is collapsed, it will expand it
    // and change the text to "Hide filters"

    // This line checks if the element with the class "filtersList" is currently visible
    if ($(".filtersList").is(":visible")) {
        // If it is visible, slide it up (hide it) over 400 milliseconds
        $(".filtersList").slideUp(400);
        // Change the text of the "showFilters" button to "Show filters"
        $(".showFilters").text("Show filters");
    } else {
        // If it is not visible, slide it down (show it) over 400 milliseconds
        $(".filtersList").slideDown(400);
        // Change the text of the "showFilters" button to "Hide filters"
        $(".showFilters").text("Hide filters");
    }

    // This line prevents the default action of the link, which is to follow the href attribute
    return false;
});

// This line sets up a click event listener on all anchor tags within elements with the class "filtersList"
$(".filtersList a").on("click", function () {

    // This line gets the value of the "data-filter" attribute of the clicked link
    var filter = $(this).attr("data-filter");

    // This line logs the filter value to the console
    console.log(filter);

    // This comment explains that it will hide all products
    // and show only the products that have the class matching the filter
    // If the filter is "all", it will show all products
    // Otherwise, it will show only the products that have the class matching the filter

    // This line hides all elements with the class "product"
    $(".product").hide();
    // This line shows only the elements that match the filter
    $(filter).show();

    // This comment explains that it will remove the "selected" class from all filter links
    // and add the "selected" class to the clicked link

    // This line removes the "selected" class from all filter links
    $(".filtersList a").removeClass("selected");
    // This line adds the "selected" class to the clicked link
    $(this).addClass("selected");

    // This line prevents the default action of the link, which is to follow the href attribute
    return false;

});