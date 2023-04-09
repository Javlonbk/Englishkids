const buttons = document.querySelectorAll(".btn");

const redirectTo = (difficulty) => {
  // console.log(window.loc ation.href.replace("level", url));
  const endpoint = window.location.href.replace("level", "test");
  window.location.assign(`${endpoint}?level=${difficulty}`);
};

buttons.forEach((elm) => {
  elm.addEventListener("click", function (event) {
    // console.log(window.location.origin);
    switch (this.getAttribute("data-level")) {
      case "easy":
        return redirectTo("easy");
      case "medium":
        return redirectTo("medium");
      case "hard":
        return redirectTo("hard");
      default:
        break;
    }
    // console.log(this.getAttribute("data-level"));
  });
});
