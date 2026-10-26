$(".filter button").each(function () {
  $(this).on("click", function () {
    if ($(this).hasClass("active")) {
      // toggles to the "all" filter if the tag is clicked again while active
      $(".filter button").removeClass("active");
      $("button.all").addClass("active");

      // reveal all boxes
      $(".box").addClass("visible");
    } else {
      // make all boxes visible first
      $(".box").addClass("visible");

      // then, remove the visible class from all boxes with a class different from the selected tag
      var filtertag = $(this).attr("class");
      $(".box:not(." + filtertag + ")").removeClass("visible");

      // remove active class from all filter buttons
      $(".filter button").removeClass("active");

      // then, add the active class just to the filter button that was clicked
      $(this).addClass("active");
    }
  });
});
