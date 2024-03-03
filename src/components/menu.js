export default function menu() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  content.appendChild(menu);
  const menuItems = `
  <p>Test Test Test</p>
  `;
  menu.innerHTML = menuItems;
  console.log("nesto se desava");
  return menu;
}
