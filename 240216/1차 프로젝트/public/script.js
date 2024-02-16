const header = document.querySelector("header");
const gototop = document.querySelector(".gototop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

gototop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});

$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb").toggleClass("active");
});

$(".gnb a").click(function () {
  $(".gnb").removeClass("active");
  $(".trigger").removeClass("active");
});

$(".nav-btn").click(function () {
  $.scrollTo(this.hash || 0, 900);
});

$(window).resize(function () {
  $("#like").width($(window).width()).height($(window).height());
});

setTimeout(function () {
  $(window).resize();
}, 0);

$(".like-container").parallaxScroll({
  friction: 0.7,
});
