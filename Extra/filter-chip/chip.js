const uniqueCategories = new Set();

function addFilterChip(category) {
  const filterChipsContainer = document.getElementById("filterChipsContainer");

  const formattedCategory = category.trim().toLowerCase();

  if (uniqueCategories.has(formattedCategory)) {
    return;
  }

  uniqueCategories.add(formattedCategory);

  const filterChip = document.createElement("div");
  filterChip.classList.add("filter-chip");
  filterChip.textContent = category;

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";

  closeButton.addEventListener("click", () => {
    uniqueCategories.delete(formattedCategory);
    filterChipsContainer.removeChild(filterChip);
    updateElements();
  });

  filterChip.appendChild(closeButton);
  filterChipsContainer.appendChild(filterChip);

  updateElements();
}

function updateElements() {
  const elements = document.querySelectorAll(".elements-container span");

  elements.forEach((element) => {
    const categories = element.getAttribute("data-categories").split(",");
    const isVisible = categories.some((category) =>
      uniqueCategories.has(category.trim().toLowerCase())
    );

    if (isVisible) {
      element.style.display = "inline"; // Display inline to match the span behavior
    } else {
      element.style.display = "none";
    }
  });
}

function filterElements(category) {
  addFilterChip(category);
}

const categoryButtons = document.querySelectorAll(".categoryButton");

categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.textContent.trim();
    addFilterChip(category);
  });
});

/* Add your styles for filter chips here */

// // chip.js

// const uniqueCategories = new Set();

// function addFilterChip(category) {
//   const filterChipsContainer = document.getElementById("filterChipsContainer");

//   const formattedCategory = category.trim().toLowerCase();

//   if (uniqueCategories.has(formattedCategory)) {
//     return;
//   }

//   uniqueCategories.add(formattedCategory);

//   const filterChip = document.createElement("div");
//   filterChip.classList.add("filter-chip");
//   filterChip.textContent = category;

//   const closeButton = document.createElement("span");
//   closeButton.classList.add("close-btn");
//   closeButton.innerHTML = "&times;";

//   closeButton.addEventListener("click", () => {
//     uniqueCategories.delete(formattedCategory);
//     filterChipsContainer.removeChild(filterChip);
//     updateElements();
//   });

//   filterChip.appendChild(closeButton);
//   filterChipsContainer.appendChild(filterChip);

//   updateElements();
// }

// function updateElements() {
//   const elements = document.querySelectorAll(".element");

//   elements.forEach((element) => {
//     const categories = element.getAttribute("data-categories").split(",");
//     const isVisible = categories.every((category) =>
//       uniqueCategories.has(category.trim().toLowerCase())
//     );

//     if (isVisible) {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   });
// }
