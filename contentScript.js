(function () {
  "use strict";
  const cssPrefix = "learn-better--";

  // hide initial content deemed always unnecessary
  const sgWidget = document.getElementById("js--region-sidebar-footer");
  if (sgWidget !== null) sgWidget.remove();
  const friendsWidget = document.querySelector(".site-widget");
  if (friendsWidget !== null) friendsWidget.remove();
  const banner = document.getElementById("js--banner");
  if (banner !== null) banner.remove();

  // create container for main part of extension
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.padding = "5px";
  container.style.background = "#7A7DB7";
  container.style.boxShadow = "0px 6px 4px -2px #ccc";
  container.style.borderRadius = "7px";
  container.style.top = "125px";
  container.style.left = "42px";
  container.style["z-index"] = "100";

  // button to change modes
  const workButton = document.createElement("button");
  workButton.id = `${cssPrefix}-btn`;
  workButton.innerHTML = "Work mode";
  workButton.style.borderRadius = "4px 0 0 4px";
  workButton.style.height = "50px";
  workButton.style.width = "100px";
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

  // add dropdown to container
  const dropdown = document.createElement("div");
  dropdown.id = `${cssPrefix}-dropdown`;

  // add draggable element
  // TODO: make a different icon for better UX
  const dragElement = document.createElement("div");
  dragElement.style.background = "#00BCE1";
  dragElement.style.float = "right";
  dragElement.style.height = "50px";
  dragElement.style.width = "20px";
  dragElement.style.borderRadius = "0 4px 4px 0";
  container.append(workButton, dragElement);
  document.body.appendChild(container);
  const draggable = new Draggable(dragElement);
  draggable.initialize();
})();
