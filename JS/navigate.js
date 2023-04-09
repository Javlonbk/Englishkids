const buttons = document.querySelectorAll(".btn");

const redirectTo = (url) => {
  // console.log(window.loc ation.href.replace("level", url));
  window.location.assign(window.location.href.replace("level", "test"));
};

buttons.forEach((elm) => {
  elm.addEventListener("click", function (event) {
    // console.log(window.location.origin);
    switch (this.getAttribute("data-level")) {
      case "easy":
        return redirectTo("easyTest");
      case "medium":
        return redirectTo("mediumTest");
      case "hard":
        return redirectTo("difficultTest");
      default:
        break;
    }
    // console.log(this.getAttribute("data-level"));
  });
});
