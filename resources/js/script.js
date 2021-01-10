$(document).ready(function () {
  /* this ensure that javascripts can only be done after */

  /* ------- For the sticky navigation ----------- */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* ------- Scroll on buttons ----------- */

  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* ------- Navigation Scroll ----------- */

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* ------- Animations on Scroll ----------- */

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeInTopLeft");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInBottomLeft");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__shakeY");
    },
    {
      offset: "50%",
    }
  );
});

/* Mobile navigation */
$(".js--nav-icon, .js--main-nav a, .logo-black").click(function (element) {
  var nav = $(".js--main-nav");
  var icon = $(".js--nav-icon i");

  //Gets the class name of the element that triggered the event
  var clicked = element.target.className;

  //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
  if (icon.hasClass("ion-navicon-round") && clicked == "logo-black") return;

  //Opens and closes the menu
  if ($(window).width() < 768) {
    nav.slideToggle(2000);
  }

  //Changes icon states of the menu button
  if (icon.hasClass("ion-navicon-round")) {
    icon.addClass("ion-close-round");
    icon.removeClass("ion-navicon-round");
  } else {
    icon.addClass("ion-navicon-round");
    icon.removeClass("ion-close-round");
  }
});

$(window).resize(function () {
  var nav = $(".js--main-nav");
  var icon = $(".js--nav-icon i");

  if ($(window).width() > 767) {
    nav.css("display", "block");
    icon.addClass("ion-close-round");
    icon.removeClass("ion-navicon-round");
  } else {
    nav.css("display", "none");
    icon.addClass("ion-navicon-round");
    icon.removeClass("ion-close-round");
  }
});
