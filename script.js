$(document).ready(function () {
  $("#check").change(function () {
    if ($(this).is(":checked")) {
      $(".nav-menu").css("top", "64px");
    } else {
      $(".nav-menu").css("top", "-200px");
    }
  });
});
