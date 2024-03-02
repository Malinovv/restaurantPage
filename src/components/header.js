import home from "./home";

export default function header() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const btnHome = document.createElement("button");
  btnHome.innerText = "Home";
  // Set attributes and classes for the Home button
  btnHome.setAttribute("type", "button");
  btnHome.classList.add("home-btn");

  const btnMenu = document.createElement("button");
  btnMenu.innerText = "Menu";
  // Set attributes and classes for the Menu button
  btnMenu.setAttribute("type", "button");
  btnMenu.classList.add("menu-btn");

  const btnAbout = document.createElement("button");
  btnAbout.innerText = "About";
  // Set attributes and classes for the About button
  btnAbout.setAttribute("type", "button");
  btnAbout.classList.add("about-btn");

  header.appendChild(nav);
  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnAbout);

  btnHome.addEventListener("click", home);

  return header;
}
