window.onload = function () {
  document.querySelectorAll(".bundle-item-bottom").forEach((unit) => {
    unit.style.display = "none";
  });
};

function toggleExpand(unitId) {
  document.querySelectorAll(".bundle-item-bottom").forEach((unit) => {
    unit.style.display = "none";
  });
  document.querySelectorAll(".unit-1").forEach((unit) => {
    unit.classList.remove("expanded");
  });

  const selectedUnit = document.getElementById(`bundle-item-bottom-${unitId}`);
  if (selectedUnit) {
    selectedUnit.style.display = "block";
  }

  const selectedContainer = document.getElementById(unitId);
  selectedContainer.classList.add("expanded");
}

document.querySelectorAll('input[type="radio"][name="unit"]').forEach((radio) => {
  radio.addEventListener("click", function (e) {
    // Prevent bubbling up to parent div (if onclick exists)
    e.stopPropagation();

    // Use the parent unit ID
    const unitDiv = this.closest(".unit-1");
    if (unitDiv && unitDiv.id) {
      toggleExpand(unitDiv.id);
    }
  });
});
