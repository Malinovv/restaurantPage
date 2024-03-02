import content from "./content";

export default function home() {
  const content = document.querySelector("#content");
  const home = document.createElement("div");
  content.appendChild(home);
  home.setAttribute("id", "home-section");

  return home;
}
