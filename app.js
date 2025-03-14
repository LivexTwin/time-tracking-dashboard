let activityData = []; // Store fetched data
let activeTimeframe = "weekly"; // Track selected timeframe

function init() {
  fetchData();
  setupEventListeners();
}

function fetchData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      activityData = data;
      renderUI(activeTimeframe); // Default view
      applyActiveClass(); // ✅ Apply active class on load
    })
    .catch((error) => console.error("Error loading data:", error));
}

function renderUI(timeframe) {
  const container = document.querySelector(".grid");

  const gridItems = document.querySelectorAll(".grid__item");
  gridItems.forEach((item) => item.remove()); // Remove only grid items
  const frag = document.createDocumentFragment(); // Create a document fragment to hold all the items
  // Colors array (to cycle through colors for each item)
  const colors = [
    "var(--clr-primary-softRed)",
    "var(--clr-primary-softBlue)",
    "var(--clr-primary-lightRed)",
    "var(--clr-primary-limeGreen)",
    "var(--clr-primary-violet)",
    "var(--clr-primary-softOrange)",
  ];

  activityData.forEach((item, index) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid__item");

    const dataDiv = document.createElement("div");
    dataDiv.classList.add("grid__item--data", "grid__wrapper");
    dataDiv.innerHTML = `
      <div class="grid__item--options">
        <button>
          <img src="images/icon-ellipsis.svg" alt="ellipsis icon" />
        </button>
      </div>
      <div class="grid__item--current">
        <h3>${item.title}</h3>
        <p>${item.timeframes[timeframe].current}hrs</p>
      </div>
      <div class="grid__item--previous">
        <p>${
          timeframe === "daily"
            ? "Yesterday"
            : `Last ${timeframe === "weekly" ? "Week" : "Month"}`
        } - ${item.timeframes[timeframe].previous}hrs</p>
      </div>
    `;

    const styleDiv = document.createElement("div");
    styleDiv.classList.add("grid__item--style");
    styleDiv.style.backgroundImage = `url(${item.icon})`;
    gridItem.style.backgroundColor = colors[index % colors.length];

    gridItem.appendChild(styleDiv);
    gridItem.appendChild(dataDiv);

    frag.appendChild(gridItem); // Append grid item to the fragment
  });

  container.appendChild(frag); // Append the fragment to the container in one go
}

function applyActiveClass() {
  document.querySelectorAll(".profile__body button").forEach((button) => {
    const isActive = button.textContent.toLowerCase() === activeTimeframe;
    button.classList.toggle("active", isActive);

    button.setAttribute("aria-pressed", isActive);
  });
}

function setupEventListeners() {
  document.querySelectorAll(".profile__body button").forEach((button) => {
    button.addEventListener("click", () => {
      const timeframe = button.textContent.toLowerCase();

      if (activeTimeframe === timeframe) return; // Prevent unnecessary updates

      activeTimeframe = timeframe; // Update the global timeframe
      applyActiveClass(); // ✅ Handle active button UI update
      renderUI(timeframe); // ✅ Update UI
    });
  });
}

init(); // Start the script
