// Simple Sermon Search & Filter Script
document.addEventListener("DOMContentLoaded", () => {
  // 🔍 Create Search Input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search sermons by title or preacher...";
  searchInput.style.cssText = "margin: 2rem auto; display: block; padding: 0.5rem; width: 80%; max-width: 500px; border: 1px solid #ccc; border-radius: 8px;";

  const container = document.querySelector(".sermon-container");
  container.prepend(searchInput);

  // 🧠 Category Buttons
  const categories = ["All", "Sunday Message", "Power Night"];
  const categoryBar = document.createElement("div");
  categoryBar.style.cssText = "text-align: center; margin-bottom: 2rem;";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.style.cssText = `
      margin: 0 10px;
      padding: 8px 16px;
      border: none;
      border-radius: 20px;
      background-color: #ffcf33;
      cursor: pointer;
      font-weight: bold;
    `;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".sermon-card").forEach(card => {
        const cardCategory = card.getAttribute("data-category") || "";
        if (cat === "All" || cardCategory === cat) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });

    categoryBar.appendChild(btn);
  });

  container.insertBefore(categoryBar, searchInput.nextSibling);

  // 🔍 Filter by search
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".sermon-card").forEach(card => {
      const title = card.querySelector(".sermon-title")?.textContent.toLowerCase() || "";
      const preacher = card.querySelector(".sermon-preacher")?.textContent.toLowerCase() || "";
      if (title.includes(query) || preacher.includes(query)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});