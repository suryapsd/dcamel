$(document).on("click", "#return-option", function () {
  $("#oneway-option").removeClass("active");

  $(this).toggleClass("active");

  var returnDateInput = $("#return_date");
  var openCheck = $("#openCheck");

  if ($(this).hasClass("active")) {
    returnDateInput.removeAttr("disabled");
    openCheck.removeAttr("disabled");
  }
});

$(document).on("click", "#openCheck", function () {
  $("#return-option").removeClass("active");
  $(this).toggleClass("active");
  $("#return_date").prop("disabled", true);
});

$(document).on("click", "#oneway-option", function () {
  $("#return-option").removeClass("active");
  $(this).toggleClass("active");
  $("#return_date").prop("disabled", true);
});

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
  const fromDate = document.querySelector("#departure-date"),
    toDate = document.querySelector("#return_date");

  // Date
  // if (fromDate) {
  //   const today = new Date();
  //   const yesterday = new Date(today);
  //   yesterday.setDate(today.getDate() - 1);

  //   fromDate.flatpickr({
  //     altInput: true,
  //     altFormat: "F j, Y",
  //     dateFormat: "Y-m-d",
  //     disable: [
  //       {
  //         from: yesterday.toISOString().split("T")[0],
  //         to: today.toISOString().split("T")[0],
  //       },
  //     ],
  //   });
  // }

  // if (toDate) {
  //   const today = new Date();
  //   const yesterday = new Date(today);
  //   yesterday.setDate(today.getDate() - 1);

  //   toDate.flatpickr({
  //     altInput: true,
  //     altFormat: "F j, Y",
  //     dateFormat: "Y-m-d",
  //     disable: [
  //       {
  //         from: yesterday.toISOString().split("T")[0],
  //         to: today.toISOString().split("T")[0],
  //       },
  //     ],
  //   });
  // }
})();

// (function () {
//   // Numbered Wizard
//   // --------------------------------------------------------------------
//   const wizardNumbered = document.querySelector(".wizard-numbered"),
//     wizardNumberedBtnNextList = [].slice.call(wizardNumbered.querySelectorAll(".btn-next")),
//     wizardNumberedBtnPrevList = [].slice.call(wizardNumbered.querySelectorAll(".btn-prev")),
//     wizardNumberedBtnSubmit = wizardNumbered.querySelector(".btn-submit");

//   if (typeof wizardNumbered !== undefined && wizardNumbered !== null) {
//     const numberedStepper = new Stepper(wizardNumbered, {
//       linear: false,
//     });
//     if (wizardNumberedBtnNextList) {
//       wizardNumberedBtnNextList.forEach((wizardNumberedBtnNext) => {
//         wizardNumberedBtnNext.addEventListener("click", (event) => {
//           numberedStepper.next();
//         });
//       });
//     }
//     if (wizardNumberedBtnPrevList) {
//       wizardNumberedBtnPrevList.forEach((wizardNumberedBtnPrev) => {
//         wizardNumberedBtnPrev.addEventListener("click", (event) => {
//           numberedStepper.previous();
//         });
//       });
//     }
//     if (wizardNumberedBtnSubmit) {
//       wizardNumberedBtnSubmit.addEventListener("click", (event) => {
//         alert("Submitted..!!");
//       });
//     }
//   }
// })();

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
