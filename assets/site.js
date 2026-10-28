const search = document.querySelector("#search");
const cards = [...document.querySelectorAll(".entry-card")];
const filters = [...document.querySelectorAll(".filter")];
const empty = document.querySelector("#empty");
let category = "全部";

function applyFilters() {
  const query = (search?.value || "").trim().toLowerCase();
  let visible = 0;
  for (const card of cards) {
    const matchesCategory = category === "全部" || card.dataset.category === category;
    const matchesQuery = !query || (card.dataset.search || "").includes(query);
    card.hidden = !(matchesCategory && matchesQuery);
    if (!card.hidden) visible += 1;
  }
  if (empty) empty.hidden = visible !== 0;
}

search?.addEventListener("input", applyFilters);
for (const filter of filters) {
  filter.addEventListener("click", () => {
    category = filter.dataset.filter || "全部";
    for (const item of filters) item.classList.toggle("active", item === filter);
    applyFilters();
  });
}
