const frontEndBtns = document.querySelectorAll(".frontend_btn");
const juniorBtns = document.querySelectorAll(".junior_btn");
const javascriptBtns = document.querySelectorAll(".javascript_lang_btn");
const imageHeaderDiv = document.querySelector(".bg-header-img");
const allButtons = document.querySelectorAll("button");

filterSelection([]);

function filterSelection(categories) {
  var x, i;
  x = document.getElementsByClassName("job-filter-card");
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    var hasCategory = false;
    for (var j = 0; j < categories.length; j++) {
      if (x[i].className.indexOf(categories[j]) > -1) {
        hasCategory = true;
        break;
      }
    }
    if (categories.length === 0 || hasCategory) {
      addClass(x[i], "show");
    }
  }
  updateFilterChips(categories);
}

function addClass(element, name) {
  if (!element) {
    console.error("Element is undefined or null.");
    return;
  }

  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  if (!element) {
    console.error("Element is undefined or null.");
    return;
  }

  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; arr1 && i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

window.onload = function () {
  filterSelection([]);
  // Assuming 'this' is intended to be the button, otherwise pass the correct argument
  // updateActiveButton(this);
};

frontEndBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var categories = getSelectedCategories();
    categories.push("Frontend");
    filterSelection(categories);
    // Assuming 'this' is intended to be the button, otherwise pass the correct argument
    // updateActiveButton(this);
  });
});

function getSelectedCategories() {
  var categories = [];
  allButtons.forEach(function (button) {
    categories.push(button.textContent.toLowerCase());
  });
  return categories;
}

function updateFilterChips(categories) {
  var filterChipsContainer = document.querySelector(".filterBoard");
  filterChipsContainer.innerHTML = "";
  categories.forEach(function (category) {
    // var chip = document.createElement("div");
    // chip.className = "filterChip";
    // let clear = document.createElement("span");
    // clear.className = "clear";
    // clear.innerHTML = "Clear";
    let filterChips = document.createElement("section");
    filterChips.className = "filterChips";
    // let filteredRole = document.createElement("span");
    // filteredRole.className = "filteredRole";
    // filteredRole.textContent = category;
    var cancelBtn = document.createElement("div");
    cancelBtn.className = "filteredRoleRemove ";
    cancelBtn.innerHTML = ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      class="filteredRoleRemoveSVG"
    >
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
      />
    </svg> `;
    cancelBtn.addEventListener("click", function () {
      var index = categories.indexOf(category);
      if (index !== -1) {
        categories.splice(index, 1);
        filterSelection(categories);
      }
    });
    // chip.appendChild(filteredRole);
    // chip.appendChild(cancelBtn);
    // filterChips.appendChild(chip);
    filterChipsContainer.appendChild(filterChips);
    var chip = `<div class="filterChip">
    <span class="filteredRole">${category}</span>
    ${cancelBtn}
  </div>`;
    filterChips.innerHTML = chip;
  });
}

// const uniqueCategories = new Set();

// function addFilterChipCategory(category) {
//   //convert to lowercase and trim white spaces
//   const filterChipsContainer = document.querySelector(".filterBoard");
//   filterChipsContainer.classList.add("active_bg");
//   const formattedCategory = category.trim().toLowerCase();
//   if (uniqueCategories.has(formattedCategory)) {
//     return;
//   }
//   uniqueCategories.add(formattedCategory);
//   const filterChip = document.createElement("div");
//   filterChip.classList.add("filterChip");
//   filterChip.textContent = category;

//   // Create a close button for the filter chip
//   const closeButton = document.createElement("span");
//   closeButton.classList.add("close-btn");
//   closeButton.innerHTML = "&times;";

//   // Add an event listener to remove the filter chip when the close button is clicked
//   closeButton.addEventListener("click", () => {
//     // Remove the category from the Set when the chip is removed
//     uniqueCategories.delete(formattedCategory);
//     filterChipsContainer.removeChild(filterChip);
//   });

//   // Append the close button to the filter chip
//   filterChip.appendChild(closeButton);

//   // Append the filter chip to the container
//   filterChipsContainer.appendChild(filterChip);

// filterChipDiv.textContent = `<span class="filteredRole">${category}</span>
// <div class="filteredRoleRemove">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="14"
//     height="14"
//     class="filteredRoleRemoveSVG"
//   >
//     <path
//       fill="#FFF"
//       fill-rule="evenodd"
//       d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
//     />
//   </svg>
// </div> `;
// filterBoard.appendChild(filterChipDiv);
// }
// allButtons.forEach((button) => {
//   let buttonText = button.textContent;
//   button.addEventListener("click", () => {
//     addFilterChipCategory(buttonText);
//   });
// });

// function extractTextContent(event) {
//   const { target } = event;
//   return target.innerHTML;
// }

// let filterBoardArray = []; // Declare filterBoardArray outside the event listener

// allButtons.forEach((button, index) => {
//   button.addEventListener("click", (buttonEl) => {
//     let output = extractTextContent(buttonEl);
//     let filteredBoards = `<section class="filterBoard">
//       <div class="filteredItem">
//         <span class="filteredRole">${output}</span>
//         <div class="filteredRoleRemove">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="14"
//             height="14"
//             class="filteredRoleRemoveSVG"
//           >
//             <path
//               fill="#FFF"
//               fill-rule="evenodd"
//               d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>`;

//     filterBoardArray.push(filteredBoards); // Push the new filteredBoards into the array

//     imageHeaderDiv.innerHTML += filterBoardArray[filterBoardArray.length - 1]; // Append the last filteredBoard to the existing content
//   });
// });

// console.log(filteredBoards);
// console.log(frontEndBtnText);
// console.log(juniorBtns);
// function filterSelection(c) {}
// function addClass() {}
// function removeClass() {}
