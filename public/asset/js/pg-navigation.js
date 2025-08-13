/**
 * Initializes the page by adjusting the body padding immediately
 * and setting up a resize event listener to ensure the padding
 * is adjusted whenever the browser window is resized.
 * This is typically called after the DOM content has been loaded.
 */
const setupPage = () => {
  adjustBodyPadding();
  window.addEventListener("resize", adjustBodyPadding);
};

/**
 * Attaches the `setupPage` function to the `DOMContentLoaded` event.
 * This ensures that the page setup logic (initial padding adjustment
 * and event listener creation) runs only after the main HTML document
 * has been fully loaded and parsed.
 */
document.addEventListener("DOMContentLoaded", setupPage);

/**
 * Adjusts the top and bottom padding of the document body
 * to prevent content from being hidden by fixed navigation bars.
 * It calculates the height of both a top and a bottom navigation bar
 * and applies that height as padding to the body.
 */
function adjustBodyPadding() {
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
}
