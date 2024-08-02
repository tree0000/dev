// function func() {
//   let text = event.target.tagName;
//   document.getElementById("show").innerHTML = text;
// }

// const item = document.querySelector(".item");

// item.addEventListener("dragstart", (e) => {
//   console.log("1드래그 시작");
// });

// item.addEventListener("drag", (e) => {
//   console.log("1드래그 하면 나와");
// });

// const container = document.querySelector(".container");
// container.addEventListener("dragenter", (e) => {
//   console.log("1박스 영역에 최초 진입!");
// });
// container.addEventListener("dragleave", (e) => {
//   console.log("1박스 영역 떠나면 나와");
// });
// container.addEventListener("dragover", (e) => {
//   console.log("1여기 있어!");
//   e.preventDefault();
// });
// container.addEventListener("drop", (e) => {
//   console.log("2번 박스영역에 드롭");
// });
// const container2 = document.querySelector(".container2");

// container2.addEventListener("dragenter", (e) => {
//   console.log("2박스 영역에 최초 진입!");
// });
// container2.addEventListener("dragleave", (e) => {
//   console.log("2박스 영역 떠나면 나와");
// });
// container2.addEventListener("dragover", (e) => {
//   console.log("2여기 있어!");
//   e.preventDefault();
// });
// container2.addEventListener("drop", (e) => {
//   console.log("2번 박스영역에 드롭");
// });
// document.getElementById("appendChildBtn").onclick = function () {
//   const parent = document.getElementById("parent");
//   const newElement = document.createElement("div");
//   newElement.textContent = "New Child";
//   parent.appendChild(newElement);
// };

// document.getElementById("insertBeforeBtn").onclick = function () {
//   const parentEl = document.getElementById("parent");
//   const newEl = document.createElement("div");
//   newEl.textContent = "New Child";
//   const reference = document.getElementById("reference");
//   parentEl.insertBefore(newEl, reference);
// };

//드래그&그롭
const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    if (afterElement === undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
