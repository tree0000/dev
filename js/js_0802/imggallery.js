// const gallery = document.getElementById("gallery");
// let draggedElement = null;

// gallery.addEventListener("drag", (e) => {
//   if (e.target.tagName === "IMG") {
//     draggedElement = e.target;
//     e.target.classList.add("dragging");
//   }
// });
// gallery.addEventListener("dragend", (e) => {
//   if (e.target.tagName === "IMG") {
//     e.target.classList.remove("dragging");
//     draggedElement = null;
//   }
// });

// gallery.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   const afterElement = getDragAfterElement(gallery, e.clientY);
//   const currentElement = document.querySelector(".dragging");
//   if (afterElement == null) {
//     gallery.appendChild(currentElement);
//   } else {
//     gallery.insertBefore(currentElement, afterElement);
//   }
// });

// function getDragAfterElement(container, y) {
//   const draggableElements = [
//     ...container.querySelectorAll("img:not(.dragging)"),
//   ];

//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;
//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child };
//       } else {
//         return closest;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }

const gallery = document.getElementById("gallery");
const images = gallery.querySelectorAll("img");
let dragImage = null;

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    image, classList.add("dragging");
    dragImage = image;
  });
  image.addEventListener("dragend", (e) => {
    image.classList.remove("dragging");
  });
  image.addEventListener("dragover", (e) => {
    console.log("드래그");
  });
  image.addEventListener("drop", (e) => {
    if (dragImage !== image) {
      gallery.insertBefore(dragImage, image);
    }
  });
});
