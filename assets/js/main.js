document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000); 
});

window.addEventListener('load', function () {
  var loaderContainer = document.getElementById('loader');
  loaderContainer.style.display = 'none';
});

$(document).on("click", "#return-option", function () {
  $("#oneway-option").removeClass("active");
  $(this).toggleClass("active");

  var returnDateInput = $("#return_date");
  var openCheck = $("#openCheck");

  if ($(this).hasClass("active")) {
    returnDateInput.removeAttr("disabled");
    openCheck.removeAttr("disabled");
  } else {
    returnDateInput.prop("disabled", true);
    openCheck.prop("checked", false); 
  }
});

$(document).on("click", "#openCheck", function () {
  var returnDateInput = $("#return_date");
  
  if ($(this).is(":checked")) {
    returnDateInput.prop("disabled", true);
  } else {
    returnDateInput.removeAttr("disabled");
  }
});

$(document).on("click", "#oneway-option", function () {
  $("#return-option").removeClass("active");
  $(this).toggleClass("active");

  var returnDateInput = $("#return_date");
  var openCheck = $("#openCheck");

  if ($(this).hasClass("active")) {
    returnDateInput.prop("disabled", true);
    openCheck.prop("disabled", true);
    openCheck.prop("checked", false);
  }
});

/**
 * Carousel
 */
(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 4,
      navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  };

  var carousel2 = function () {
    $(".featured-carousel2").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };

  var carousel3 = function () {
    $(".featured-carousel3").owlCarousel({
      loop: false,
      autoplay: false,
      margin: 20,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  };
  carousel();
  carousel2();
  carousel3();
})(jQuery);

/**
 * Form Picker
 */

("use strict");

(function () {
  // Flat Picker
  // --------------------------------------------------------------------
  const fromDate = document.querySelector("#departure_date"),
    toDate = document.querySelector("#return_date");

  // Date
  if (fromDate) {
    fromDate.flatpickr({
      monthSelectorType: 'static'
    });
  }
  if (toDate) {
    toDate.flatpickr({
      monthSelectorType: 'static'
    });
  }
})();


(function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

/**
 * Perfect Scrollbar
 */
("use strict");

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    const verticalExample = document.getElementById("vertical-example"),
      horizontalExample = document.getElementById("horizontal-example"),
      horizVertExample = document.getElementById("both-scrollbars-example");

    // Vertical Example
    // --------------------------------------------------------------------
    if (verticalExample) {
      new PerfectScrollbar(verticalExample, {
        wheelPropagation: false,
      });
    }

    // Horizontal Example
    // --------------------------------------------------------------------
    if (horizontalExample) {
      new PerfectScrollbar(horizontalExample, {
        wheelPropagation: false,
        suppressScrollY: true,
      });
    }

    // Both vertical and Horizontal Example
    // --------------------------------------------------------------------
    if (horizVertExample) {
      new PerfectScrollbar(horizVertExample, {
        wheelPropagation: false,
      });
    }
  })();
});
