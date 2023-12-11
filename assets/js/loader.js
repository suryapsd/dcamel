/**
 * Loader
 */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000);
});

window.addEventListener("load", function () {
  var loaderContainer = document.getElementById("loader");
  loaderContainer.style.display = "none";
});
