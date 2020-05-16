"use strict";

const cssPrefix = "learn-better--";

setTimeout(() => {
  const sgWidget = document.getElementById("js--region-sidebar-footer");
  if (sgWidget !== null) sgWidget.remove();
  const friendsWidget = document.getElementById("js--region-sidebar");
  if (friendsWidget !== null) friendsWidget.remove();
  const banner = document.getElementById("js--banner");
  if (banner !== null) banner.remove();
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
