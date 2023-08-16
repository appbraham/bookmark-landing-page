// MENU

let toggle = false;
let menu = document.querySelector("#menu");
let menuBar = document.querySelector("#menu-bar");
let logo = document.querySelector("#logo");

menu.addEventListener("click", showMenu);

function showMenu() {
  if (toggle) {
    logo.src = "/images/logo-bookmark.svg";
    menu.src = "/images/icon-hamburger.svg";
  } else {
    logo.src = "/images/logo-bookmark-white.svg";
    menu.src = "/images/icon-close.svg";
  }
  toggle = !toggle;
  menuBar.classList.toggle("-left-full");
}

//ACTIVE LINK

let links = document.querySelectorAll("#menu-bar ul li");
links.forEach((link) =>
  link.addEventListener("click", () => {
    resetLink();
    link.classList.toggle("text-soft_red");
  })
);

function resetLink() {
  links.forEach((item) => item.classList.remove("text-soft_red"));
}

//Tabs
let tab_bookmark = document.querySelector("#tab-bookmark");
let tab_search = document.querySelector("#tab-search");
let tab_share = document.querySelector("#tab-share");

let features = document.querySelectorAll("input[name='features']");

function getSelectedFeature() {
  let selected = document.querySelector("input[name='features']:checked").value;

  if (selected == "bookmark") {
    resetTab();
    tab_bookmark.classList.remove("hidden");
  } else if (selected == "search") {
    resetTab();
    tab_search.classList.remove("hidden");
  } else if (selected == "share") {
    resetTab();
    tab_share.classList.remove("hidden");
  }
}

features.forEach((feature) => {
  feature.addEventListener("change", getSelectedFeature);
});

function resetTab() {
  tab_bookmark.classList.add("hidden");
  tab_search.classList.add("hidden");
  tab_share.classList.add("hidden");
}
