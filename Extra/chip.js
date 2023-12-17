// Declare a Set to store unique categories
const uniqueCategories = new Set();

function addFilterChip(category) {
  const filterChipsContainer = document.getElementById("filterChipsContainer");

  // Convert the category to lowercase and trim whitespaces
  const formattedCategory = category.trim().toLowerCase();

  // Check if the category already exists in the Set
  if (uniqueCategories.has(formattedCategory)) {
    // If the category already exists, return and don't add it again
    return;
  }

  // Add the category to the Set
  uniqueCategories.add(formattedCategory);

  // Create a new filter chip element
  const filterChip = document.createElement("div");
  filterChip.classList.add("filter-chip");
  filterChip.textContent = category;

  // Create a close button for the filter chip
  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";

  // Add an event listener to remove the filter chip when the close button is clicked
  closeButton.addEventListener("click", () => {
    // Remove the category from the Set when the chip is removed
    uniqueCategories.delete(formattedCategory);
    filterChipsContainer.removeChild(filterChip);
  });

  // Append the close button to the filter chip
  filterChip.appendChild(closeButton);

  // Append the filter chip to the container
  filterChipsContainer.appendChild(filterChip);
}

// REPEATING CATEGORIES
// function addFilterChip(category) {
//   const filterChipsContainer = document.getElementById("filterChipsContainer");

//   // Check if the category already exists in the container
//   const existingCategories = Array.from(filterChipsContainer.children).map(
//     (chip) => chip.textContent.trim().toLowerCase()
//   );

//   if (existingCategories.includes(category.trim().toLowerCase())) {
//     // If the category already exists, return and don't add it again
//     return;
//   }

//   // Create a new filter chip element
//   const filterChip = document.createElement("div");
//   filterChip.classList.add("filter-chip");
//   filterChip.textContent = category;

//   // Create a close button for the filter chip
//   const closeButton = document.createElement("span");
//   closeButton.classList.add("close-btn");
//   closeButton.innerHTML = "&times;";

//   // Add an event listener to remove the filter chip when the close button is clicked
//   closeButton.addEventListener("click", () => {
//     filterChipsContainer.removeChild(filterChip);
//   });

//   // Append the close button to the filter chip
//   filterChip.appendChild(closeButton);

//   // Append the filter chip to the container
//   filterChipsContainer.appendChild(filterChip);
// }

// REACT VERSION
// import React, { useState } from 'react';

// const FilterChips = () => {
//   // State to store unique categories
//   const [uniqueCategories, setUniqueCategories] = useState(new Set());

//   // Function to add a filter chip
//   const addFilterChip = (category) => {
//     // Convert the category to lowercase and trim whitespaces
//     const formattedCategory = category.trim().toLowerCase();

//     // Check if the category already exists in the Set
//     if (uniqueCategories.has(formattedCategory)) {
//       // If the category already exists, return and don't add it again
//       return;
//     }

//     // Add the category to the Set
//     setUniqueCategories(new Set([...uniqueCategories, formattedCategory]));
//   };

//   // Function to remove a filter chip
//   const removeFilterChip = (category) => {
//     // Remove the category from the Set
//     setUniqueCategories((prevCategories) => {
//       const updatedCategories = new Set(prevCategories);
//       updatedCategories.delete(category);
//       return updatedCategories;
//     });
//   };

//   return (
//     <div>
//       <div id="filterChipsContainer">
//         {/* Render filter chips based on the state */}
//         {Array.from(uniqueCategories).map((category) => (
//           <div key={category} className="filter-chip">
//             {category}
//             <span className="close-btn" onClick={() => removeFilterChip(category)}>
//               &times;
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Example buttons to add filter chips */}
//       <button onClick={() => addFilterChip('Category A')}>Category A</button>
//       <button onClick={() => addFilterChip('Category B')}>Category B</button>
//       {/* ... Repeat for other categories ... */}
//     </div>
//   );
// };

// export default FilterChips;
