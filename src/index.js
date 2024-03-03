import _ from "lodash";
import "./style.css";
import landing from "./components/landing-page.module";
import menu from "./components/menu";

document.body.appendChild(landing());

const homeBtn = document.querySelector("home-btn");
const menuBtn = document.querySelector("menu-btn");
homeBtn.addEventListener("click", landing);
menuBtn.addEventListener("click", menu);
