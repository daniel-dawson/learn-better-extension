"use strict";

const cssPrefix = "learn-better--";

const _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-160250616-2"]);
_gaq.push(["_trackPageview"]);

(function () {
  const ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://ssl.google-analytics.com/ga.js";
  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

setTimeout(() => {
  const sgWidget = document.getElementById("js--region-sidebar-footer");
  if (sgWidget !== null) sgWidget.remove();
  const friendsWidget = document.getElementById("js--region-sidebar");
  if (friendsWidget !== null) friendsWidget.remove();
  const banner = document.getElementById("js--banner");
  if (banner !== null) banner.remove();

  const container = document.createElement("div");

  const workButton = `<button id="${cssPrefix}-btn">Work mode</button>`;
  workButton.addEventListener("click", (e) => {
    const main = document.getElementById("js--region-main");
    const sideBar = document.getElementById("js--region-sidebar");
    const subHeader = document.getElementById("js--site-subheader");
    if (e.currentTarget.innerHTML === "Work mode") {
      e.currentTarget.innerHTML = "Submit/AAQ";
      const paddingEls = document.querySelectorAll(".level__inner");
      for (const el of paddingEls) {
        el.style.maxWidth = "1800px";
      }
      let banner = document.getElementById("js--banner");
      if (banner !== null) banner.remove();
      sideBar.style.display = "none";
      main.style.right = "0";
      subHeader.style.right = "0";
    } else {
      e.currentTarget.innerHTML = "Work mode";
      sideBar.style.display = "block";
      main.style.right = "263px";
      subHeader.style.right = "263px";
    }
  });
  const dragElement = `<div id="${cssPrefix}-draggable"></div>`;

  container.append(workButton, dragElement);
  document.appendChild(container);

  const draggable = new Draggable(dragElement);
  draggable.initialize;
}, 100);

class Draggable {
  constructor(el) {
    this.element = el;
  }

  initialize() {
    const el = this.element;
    el.addEventListener("mouseenter", () => {
      this.style.cursor = "grab";
    });

    el.addEventListener("mouseleave", () => {
      this.style.cursor = "default";
    });

    el.addEventListener("mousedown", function (event) {
      event.preventDefault();
      let shiftX = event.clientX - this.getBoundingClientRect().left;
      let shiftY = event.clientY - this.getBoundingClientRect().top;
      let diffX =
        this.getBoundingClientRect().left - div.getBoundingClientRect().left;
      let diffY =
        this.getBoundingClientRect().top - div.getBoundingClientRect().top;
      this.style.cursor = "grabbing";
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        el.parentElement.style.left = pageX - shiftX - diffX + "px";
        el.parentElement.style.top = pageY - shiftY - diffY + "px";
      }

      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      drag.addEventListener("mouseup", function (e) {
        e.preventDefault();
        this.style.cursor = "grab";
        document.removeEventListener("mousemove", onMouseMove);
      });
    });
  }
}
