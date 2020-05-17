const Draggable = class {
  constructor(el) {
    this.element = el;
  }
  initialize() {
    const el = this.element;
    const parent = el.parentElement;
    el.addEventListener("mouseenter", function () {
      this.style.cursor = "grab";
    });
    el.addEventListener("mouseleave", function () {
      this.style.cursor = "default";
    });
    el.addEventListener("mousedown", function (event) {
      event.preventDefault();
      let shiftX = event.clientX - this.getBoundingClientRect().left;
      let shiftY = event.clientY - this.getBoundingClientRect().top;
      let diffX =
        this.getBoundingClientRect().left - parent.getBoundingClientRect().left;
      let diffY =
        this.getBoundingClientRect().top - parent.getBoundingClientRect().top;
      this.style.cursor = "grabbing";
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        parent.style.left = pageX - shiftX - diffX + "px";
        parent.style.top = pageY - shiftY - diffY + "px";
      }
      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }
      document.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseup", function (e) {
        e.preventDefault();
        this.style.cursor = "grab";
        document.removeEventListener("mousemove", onMouseMove);
      });
    });
  }
};
