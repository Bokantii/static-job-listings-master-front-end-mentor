let myarray; // Define myarray at a higher scope

function updateFilterChips(categories) {
  var filterChipsContainer = document.querySelector(".filterBoard");
  filterChipsContainer.innerHTML = ""; // Clear existing chips

  categories.forEach(function (category) {
    var chip = document.createElement("div");
    chip.className = "filterChip";
    chip.textContent = category;

    var cancelBtn = document.createElement("span");
    cancelBtn.className = "filterRoleRemove";
    cancelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="filteredRoleRemoveSVG">
      <path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/>
    </svg>`;

    cancelBtn.addEventListener("click", function () {
      // Remove filter on cancel button click
      var index = categories.indexOf(category);
      if (index !== -1) {
        categories.splice(index, 1);
        filterSelection(categories);
        var correspondingBtn = document.getElementsByClassName(
          "filter" + category.charAt(0).toUpperCase() + category.slice(1)
        );
      }
    });

    var categorySpan = document.createElement("span");
    categorySpan.className = "filteredRole";
    categorySpan.textContent = category;

    chip.appendChild(categorySpan);
    chip.appendChild(cancelBtn);
    filterChipsContainer.appendChild(chip);
  });
}

function w3AddClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; arr1 && i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function filterSelection(categories) {
  myarray = document.querySelectorAll("button");

  for (let i = 0; i < myarray.length; i++) {
    w3RemoveClass(myarray[i], "show");
    let hasCategory = false;

    for (let j = 0; j < categories.length; j++) {
      if (myarray[i].className.indexOf(categories[j]) > -1) {
        hasCategory = true;
        break;
      }
    }

    if (categories.length === 0 || hasCategory) {
      w3AddClass(myarray[i], "show");
    }
  }

  // Update filter chips
  updateFilterChips(categories);
}

// Default state: Show all
filterSelection([]);

function getSelectedCategories() {
  var activeButtons = document.querySelectorAll(".btn.active");
  var categories = [];

  activeButtons.forEach(function (button) {
    categories.push(button.textContent.toLowerCase());
  });

  return categories;
}

//   // Add event listeners using addEventListener
//   var showAllBtn = document.getElementById("showAll");
//   showAllBtn.addEventListener("click", function () {
//     filterSelection([]);
//     updateActiveButton(this);
//   });

//   var filterCarsBtn = document.getElementById("filterCars");
//   filterCarsBtn.addEventListener("click", function () {
//     var categories = getSelectedCategories();
//     categories.push("cars");
//     filterSelection(categories);
//     updateActiveButton(this);
//   });

//   var filterAnimalsBtn = document.getElementById("filterAnimals");
//   filterAnimalsBtn.addEventListener("click", function () {
//     var categories = getSelectedCategories();
//     categories.push("animals");
//     filterSelection(categories);
//     updateActiveButton(this);
//   });

//   var filterFruitsBtn = document.getElementById("filterFruits");
//   filterFruitsBtn.addEventListener("click", function () {
//     var categories = getSelectedCategories();
//     categories.push("fruits");
//     filterSelection(categories);
//     updateActiveButton(this);
//   });

//   var filterColorsBtn = document.getElementById("filterColors");
//   filterColorsBtn.addEventListener("click", function () {
//     var categories = getSelectedCategories();
//     categories.push("colors");
//     filterSelection(categories);
//     updateActiveButton(this);
//   });

//   function updateActiveButton(clickedBtn) {
//     clickedBtn.classList.toggle("active");
//   }
