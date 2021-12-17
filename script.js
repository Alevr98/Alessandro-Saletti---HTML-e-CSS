window.addEventListener("scroll", () => {
  var content = document.querySelector("#php");
  var contentPosition = content.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  var skillBar = document.querySelectorAll(".skill-per");

  if (contentPosition < screenPosition) {
    /* skillBar.classList.add("active"); */
    skillBar.forEach((e) => {
      e.classList.add("active");
    });
  }
});
