// Use event delegation to handle the click event for "return"
$(document).on("click", "#return-option", function () {
  console.log("Return option clicked");
  $("#oneway-option").removeClass("active");

  // Toggle kelas "active" pada tombol "return"
  $(this).toggleClass("active");

  // Ambil elemen input
  var returnDateInput = $("#return-date");
  var openCheck = $("#openCheck");

  // Hapus atribut "disabled" jika tombol "return" aktif, tambahkan jika tidak
  if ($(this).hasClass("active")) {
    returnDateInput.removeAttr("disabled");
    openCheck.removeAttr("disabled");
  }
});

// Use event delegation to handle the click event for "oneway"
$(document).on("click", "#oneway-option", function () {
  console.log("Oneway option clicked");
  $("#return-option").removeClass("active");
  $(this).toggleClass("active");
  $("#return-date").prop("disabled", true);
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
      loop: true,
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
    toDate = document.querySelector("#return-date");

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
