document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");

  function applyFilter(filter) {
    // 🔁 Re-select cards every time (IMPORTANT)
    const cards = document.querySelectorAll("#productGrid .product-card");

    cards.forEach(card => {
      const category = card.dataset.category;

      if (category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    // Active button styling
    filterButtons.forEach(btn => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-white", "dark:bg-stone-800");

      if (btn.dataset.filter === filter) {
        btn.classList.remove("bg-white", "dark:bg-stone-800");
        btn.classList.add("bg-primary", "text-white");
      }
    });
  }

  // Click listeners
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyFilter(btn.dataset.filter);
    });
  });

  // Default filter (after products load)
  window.applyFilter = applyFilter;
});