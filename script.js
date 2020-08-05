document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    perPage: 3,
    breakpoints: {
      1920: {
        perPage: 3
      },
      1366: {
        perPage: 2
      },
      550: {
        perPage: 1
      }
    }
  }).mount();
});

function showMobileNav(status) {
  if (status === "open") {
    document.getElementById("mobile-nav-burger").classList.remove("show");
    document.getElementById("mobile-nav-cross").classList.add("show");
    document.getElementById("mobile-nav").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  } else {
    document.getElementById("mobile-nav-burger").classList.add("show");
    document.getElementById("mobile-nav-cross").classList.remove("show");
    document.getElementById("mobile-nav").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }
}
