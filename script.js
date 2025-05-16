window.onload = function () {
  document.querySelectorAll(".bundle-item-bottom").forEach((unit) => {
    unit.style.display = "none";
  });

  
  document.querySelectorAll(".unit-1").forEach((unit) => {
    unit.addEventListener("click", function (e) {
      if (e.target.type === "radio") {
        e.stopPropagation();
        return;
      }

      document.querySelectorAll(".bundle-item-bottom").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelectorAll(".unit-1").forEach((el) => {
        el.classList.remove("expanded");
      });

      const unitId = unit.id;
      const bundle = document.getElementById(`bundle-item-bottom-${unitId}`);
      if (bundle) {
        bundle.style.display = "block";
      }
      unit.classList.add("expanded");

      const radio = unit.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
    });
  });
};
