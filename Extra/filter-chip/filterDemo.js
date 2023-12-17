function updateFilterChips(categories) {
  var filterChipsContainer = document.getElementById("filterChipsContainer");
  filterChipsContainer.innerHTML = ""; // Clear existing chips

  categories.forEach(function (category) {
    var chip = document.createElement("div");
    chip.className = "filter-chip";
    chip.textContent = category;

    var cancelBtn = document.createElement("span");
    cancelBtn.className = "cancel-btn";
    cancelBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
    cancelBtn.addEventListener("click", function () {
      // Remove filter on cancel button click
      var index = categories.indexOf(category);
      if (index !== -1) {
        categories.splice(index, 1);
        filterSelection(categories);
        var correspondingBtn = document.getElementById(
          "filter" + category.charAt(0).toUpperCase() + category.slice(1)
        );
        correspondingBtn.classList.remove("active");
      }
    });

    chip.appendChild(cancelBtn);
    filterChipsContainer.appendChild(chip);
  });
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
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

function filterSelection(categories) {
  var myarray, i;
  myarray = document.getElementsByClassName("filterDiv");
  for (i = 0; i < myarray.length; i++) {
    w3RemoveClass(myarray[i], "show");
    var hasCategory = false;
    for (var j = 0; j < categories.length; j++) {
      if (myarray[i].className.indexOf(categories[j]) > -1) {
        hasCategory = true;
        break;
      }
    }
    if (categories.length === 0 || hasCategory) {
      w3AddClass(myarray[i], "show");
    }
  }
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

// Add event listeners using addEventListener
var showAllBtn = document.getElementById("showAll");
showAllBtn.addEventListener("click", function () {
  filterSelection([]);
  updateActiveButton(this);
});

var filterCarsBtn = document.getElementById("filterCars");
filterCarsBtn.addEventListener("click", function () {
  var categories = getSelectedCategories();
  categories.push("cars");
  filterSelection(categories);
  updateActiveButton(this);
});

var filterAnimalsBtn = document.getElementById("filterAnimals");
filterAnimalsBtn.addEventListener("click", function () {
  var categories = getSelectedCategories();
  categories.push("animals");
  filterSelection(categories);
  updateActiveButton(this);
});

var filterFruitsBtn = document.getElementById("filterFruits");
filterFruitsBtn.addEventListener("click", function () {
  var categories = getSelectedCategories();
  categories.push("fruits");
  filterSelection(categories);
  updateActiveButton(this);
});

var filterColorsBtn = document.getElementById("filterColors");
filterColorsBtn.addEventListener("click", function () {
  var categories = getSelectedCategories();
  categories.push("colors");
  filterSelection(categories);
  updateActiveButton(this);
});

function updateActiveButton(clickedBtn) {
  clickedBtn.classList.toggle("active");
}
