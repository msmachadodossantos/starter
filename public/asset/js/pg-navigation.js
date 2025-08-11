/**
 * @fileoverview This script adjusts the `padding-top` and `padding-bottom`
 * of the `<body>` element based on the current height of fixed navigation bars.
 *
 * It waits for the DOM content to be fully loaded before executing.
 * This prevents the script from running on elements that haven't been rendered
 * yet.
 *
 * @listens DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const topNavigation = document.querySelector(".pg-navigation.fixed-top");
  const bottomNavigation = document.querySelector(
    ".pg-navigation.fixed-bottom",
  );

  let topHeight = 0;
  let bottomHeight = 0;

  if (topNavigation) {
    topHeight = topNavigation.offsetHeight;
  }

  if (bottomNavigation) {
    bottomHeight = bottomNavigation.offsetHeight;
  }

  body.style.paddingTop = `${topHeight}px`;
  body.style.paddingBottom = `${bottomHeight}px`;
});
