const photos = {
  alliance: "img/activities/eunice-group-eu-flag.jpg",
  concert: "img/activities/eunice-concert.jpg",
  concertCrowd: "img/activities/concert-audience.jpg",
  students: "img/activities/students.jpg",
  lectureHall: "img/activities/lecture-hall.jpg",
};

const mediaSet = (slug, count) =>
  Array.from(
    { length: count },
    (_, index) => `img/activity-media/${slug}-${String(index + 1).padStart(2, "0")}.webp`,
  );

const activityMedia = {
  allianceGames2024: mediaSet("alliance-games-2024", 6),
  allianceGames2025: mediaSet("alliance-games-2025", 10),
  cookingShow: mediaSet("cooking-show", 4),
  earthDay2026: mediaSet("earth-day-2026", 10),
  eChess2025: mediaSet("e-chess-2025", 1),
  football2026: mediaSet("football-2026", 5),
  greenMakers2026: mediaSet("green-makers-2026", 18),
  kalamata2026: mediaSet("kalamata-2026", 5),
  odyssey2026: mediaSet("odyssey-2026", 2),
  onRoute2025: mediaSet("on-route-2025", 7),
  palio2025: mediaSet("palio-2025", 5),
  palio2026: mediaSet("palio-2026", 3),
  playlist2026: mediaSet("playlist-2026", 5),
  runningDay2026: mediaSet("running-day-2026", 13),
  virtualEscape2024: mediaSet("virtual-escape-2024", 1),
  volunteering2025: mediaSet("volunteering-2025", 5),
  womensDay2026: mediaSet("womens-day-2026", 11),
};

const photo = (src, label) => ({ type: "photo", src, label });
const video = (src, label) => ({ type: "video", src, label });
const photoGallery = (items, label) =>
  items.map((src, index) => photo(src, `${label} · ${index + 1}`));

const activities = [
  {
    id: 1,
    title: "EUNICE Weeks 2023",
    year: "2023",
    date: "2023",
    category: "Culture",
    location: "All Partner Universities · Europe",
    region: "Europe",
    coordinator: "All Partners",
    summary: "Europe-wide festival promoting European identity, multilingualism, and international collaboration.",
    description:
      "A distributed festival across the alliance celebrating European identity through campus events, multilingual encounters, creative programmes, and collaboration between partner communities.",
    competencies: ["Communication", "Intercultural & Global"],
    image: photos.alliance,
    gallery: [photo(photos.alliance, "EUNICE Weeks visual")],
  },
  {
    id: 2,
    title: "Cooking Show",
    year: "2023",
    date: "2023",
    category: "Culture",
    location: "UC · Spain",
    region: "Cantabria, Spain",
    coordinator: "UC (Spain)",
    summary: "Culinary traditions and intercultural sharing brought students together through food.",
    description:
      "A cultural cooking show where students introduced recipes, ingredients, and stories from their home regions while building connections through a shared creative experience.",
    competencies: ["Intercultural & Global", "Teamwork"],
    image: activityMedia.cookingShow[0],
    gallery: photoGallery(activityMedia.cookingShow, "Cooking Show"),
  },
  {
    id: 3,
    title: "Virtual Escape Room 2024",
    year: "2024",
    date: "Europe Day · 2024",
    category: "Digital Innovation",
    location: "UC · Spain · Online",
    region: "Cantabria, Spain · Online",
    coordinator: "UC (Spain)",
    summary: "A digital escape room exploring European democratic challenges through collaborative puzzles.",
    description:
      "Code Europa: The Disruptor Dilemma invited players to solve a sequence of digital puzzles about European institutions, citizenship, and democratic challenges.",
    competencies: ["Problem Solving", "Digital Competence"],
    image: activityMedia.virtualEscape2024[0],
    gallery: photoGallery(activityMedia.virtualEscape2024, "Code Europa"),
  },
  {
    id: 4,
    title: "Alliance Games 2024",
    year: "2024",
    date: "2024",
    category: "Sport",
    location: "UPHF · France",
    region: "Valenciennes, France",
    coordinator: "UPHF (France)",
    summary: "80+ students competed in mixed volleyball and basketball teams in Valenciennes.",
    description:
      "A high-energy tournament bringing together more than 80 students for mixed-team competition, cultural exchange, and community-building on the UPHF campus.",
    competencies: ["Intercultural & Global", "Teamwork"],
    image: activityMedia.allianceGames2024[0],
    gallery: photoGallery(activityMedia.allianceGames2024, "Alliance Games 2024"),
  },
  {
    id: 5,
    title: "Alliance Games 2025",
    year: "2025",
    date: "2025",
    category: "Sport",
    location: "IPV · Portugal",
    region: "Viseu, Portugal",
    coordinator: "IPV (Portugal)",
    summary: "Five days of volleyball, basketball, and cultural integration activities in Viseu.",
    description:
      "The 2025 edition combined competitive sport with intercultural activities, turning the Viseu campus into a meeting point for students from across the alliance.",
    competencies: ["Intercultural & Global", "Teamwork"],
    image: activityMedia.allianceGames2025[0],
    gallery: photoGallery(activityMedia.allianceGames2025, "Alliance Games 2025"),
  },
  {
    id: 6,
    title: "EUNICE and Music Concert",
    year: "2025",
    date: "2025",
    category: "Culture",
    location: "All Universities · Europe",
    region: "Europe",
    coordinator: "EUNICE Alliance",
    summary: "A musical event celebrating European diversity and artistic expression across the network.",
    description:
      "Students and artists shared performances across the alliance, using music as a common language for European connection, creativity, and cultural exchange.",
    competencies: ["Communication", "Intercultural & Global"],
    image: photos.concert,
    gallery: [photo(photos.concert, "EUNICE concert"), photo(photos.concertCrowd, "Concert audience")],
  },
  {
    id: 7,
    title: "EUNICE On Route — Escape Room 2025",
    year: "2025",
    date: "2025",
    category: "Digital Innovation",
    location: "UC · Spain · Online",
    region: "Cantabria, Spain · Online",
    coordinator: "UC (Spain)",
    summary: "A virtual journey across EUNICE countries culminating in a personalised alliance passport.",
    description:
      "Players travelled virtually through alliance countries, solving location-based puzzles and collecting achievements to build a personalised EUNICE passport.",
    competencies: ["Problem Solving", "Digital Competence"],
    image: activityMedia.onRoute2025[0],
    gallery: photoGallery(activityMedia.onRoute2025, "EUNICE On Route"),
  },
  {
    id: 8,
    title: "Day of Languages",
    year: "2025",
    date: "2025",
    category: "Culture",
    location: "All Universities · Europe",
    region: "Europe",
    coordinator: "All Partners",
    summary: "Interactive sessions and workshops celebrated linguistic diversity across Europe.",
    description:
      "Language tasters, conversation sessions, and collaborative workshops encouraged students to discover new languages and appreciate Europe's linguistic diversity.",
    competencies: ["Communication", "Intercultural & Global"],
    image: photos.lectureHall,
    gallery: [video(photos.lectureHall, "Language taster sessions")],
  },
  {
    id: 9,
    title: "E-Chess Tournament 2025",
    year: "2025",
    date: "2025",
    category: "Community",
    location: "PUT · Poland · Online",
    region: "Poznań, Poland · Online",
    coordinator: "PUT (Poland)",
    summary: "A Swiss-system online chess competition gathering 70+ students, PhD candidates, and staff.",
    description:
      "The online tournament connected the academic community across borders through strategic play, accessible participation, and a shared competitive experience.",
    competencies: ["Digital Competence", "Strategic Thinking"],
    image: activityMedia.eChess2025[0],
    gallery: photoGallery(activityMedia.eChess2025, "E-Chess Tournament 2025"),
  },
  {
    id: 10,
    title: "Wall of Femme 2025",
    year: "2025",
    date: "International Women's Day · 2025",
    category: "Inclusion",
    location: "All Universities · Europe",
    region: "Europe",
    coordinator: "All Partners",
    summary: "A campaign spotlighting inspiring female researchers and students across the alliance.",
    description:
      "Interviews and digital stories amplified the achievements of women in the EUNICE community, creating visible role models across disciplines and campuses.",
    competencies: ["Communication", "Inclusion"],
    image: photos.students,
    gallery: [
      video(photos.students, "Wall of Femme interview"),
      video(photos.lectureHall, "Researcher profile"),
    ],
  },
  {
    id: 11,
    title: "Volunteering Camp 2025",
    year: "2025",
    date: "2025",
    category: "Mobility",
    location: "IPV · Portugal",
    region: "Viseu, Portugal",
    coordinator: "IPV (Portugal)",
    summary: "A camp focused on biodiversity conservation and forest risk management.",
    description:
      "Students worked with local specialists in Viseu through practical fieldwork, environmental learning, and collaborative activities supporting biodiversity and resilience.",
    competencies: ["Teamwork", "Sustainability"],
    image: activityMedia.volunteering2025[0],
    gallery: photoGallery(activityMedia.volunteering2025, "Volunteering Camp 2025"),
  },
  {
    id: 12,
    title: "Palio 2025",
    year: "2025",
    date: "2025",
    category: "Sport",
    location: "UNICT · Italy",
    region: "Catania, Sicily",
    coordinator: "UNICT (Italy)",
    summary: "Three days of athletic competition and intercultural exchange alongside Italian students.",
    description:
      "Palio combined university sport, local tradition, and student exchange in Catania, creating a lively setting for competition and European friendships.",
    competencies: ["Intercultural & Global", "Teamwork"],
    image: activityMedia.palio2025[0],
    gallery: photoGallery(activityMedia.palio2025, "Palio 2025"),
  },
  {
    id: 13,
    title: "Volunteering Camp Kalamata July 2026",
    year: "2026",
    date: "July 2026",
    category: "Mobility",
    location: "Greece Partners · Kalamata",
    region: "Kalamata, Greece",
    coordinator: "Greece Partners",
    summary: "Community service and environmental protection in an international volunteering setting.",
    description:
      "An international camp in Kalamata combining community service, environmental action, and intercultural teamwork in partnership with local organisations.",
    competencies: ["Teamwork", "Intercultural & Global"],
    image: activityMedia.kalamata2026[0],
    gallery: photoGallery(activityMedia.kalamata2026, "Volunteering Camp Kalamata"),
  },
  {
    id: 14,
    title: "Running Day",
    year: "2026",
    date: "2026",
    category: "Sport",
    location: "All Universities · Europe",
    region: "Europe",
    coordinator: "All Partners",
    summary: "An alliance-wide running and walking challenge promoting active lifestyles and wellbeing.",
    description:
      "Students and staff participated locally while contributing to one shared alliance challenge focused on movement, wellbeing, and community motivation.",
    competencies: ["Self-Management", "Teamwork"],
    image: activityMedia.runningDay2026[0],
    gallery: photoGallery(activityMedia.runningDay2026, "Running Day"),
  },
  {
    id: 15,
    title: "International Womens Day 2026",
    year: "2026",
    date: "8 March 2026",
    category: "Inclusion",
    location: "All Universities · Europe",
    region: "Europe",
    coordinator: "All Partners",
    summary: "A campaign honouring 10 inspiring EUNICE female students and their achievements.",
    description:
      "The 2026 campaign presents ten student stories from across the alliance, recognising academic achievement, ambition, and positive impact.",
    competencies: ["Communication", "Inclusion"],
    image: activityMedia.womensDay2026[0],
    gallery: photoGallery(activityMedia.womensDay2026, "International Women's Day 2026"),
  },
  {
    id: 16,
    title: "Celebration of Earth Day",
    year: "2026",
    date: "22 April 2026",
    category: "Sustainability",
    location: "IPV & UC · Portugal & Spain",
    region: "Portugal and Spain",
    coordinator: "IPV & UC",
    summary: "A collaborative initiative raising awareness of environmental challenges and green action.",
    description:
      "Partner campuses joined forces for workshops and practical environmental action, connecting local sustainability priorities with shared European responsibility.",
    competencies: ["Sustainability", "Intercultural & Global"],
    image: activityMedia.earthDay2026[0],
    gallery: photoGallery(activityMedia.earthDay2026, "Celebration of Earth Day"),
  },
  {
    id: 17,
    title: "EUNICE Odyssey",
    year: "2026",
    date: "2026",
    category: "Digital Innovation",
    location: "UC · Spain · Online & On-Campus",
    region: "Cantabria, Spain",
    coordinator: "UC (Spain)",
    summary: "A time-travel escape room adventure across the 10 alliance countries.",
    description:
      "EUNICE Odyssey blends digital storytelling, campus participation, and problem solving in a time-travel journey through the alliance's countries and cultures.",
    competencies: ["Problem Solving", "Digital Competence"],
    image: activityMedia.odyssey2026[0],
    gallery: photoGallery(activityMedia.odyssey2026, "EUNICE Odyssey"),
  },
  {
    id: 18,
    title: "EUNICE Playlist",
    year: "2026",
    date: "European Music Day · 2026",
    category: "Culture",
    location: "All Universities · Europe",
    region: "Europe",
    coordinator: "All Partners",
    summary: "A shared European Music Day playlist created from university recommendations.",
    description:
      "Students and staff contributed tracks from across Europe to create a collective soundtrack reflecting the cultural breadth of the EUNICE community.",
    competencies: ["Communication", "Intercultural & Global"],
    image: activityMedia.playlist2026[0],
    gallery: photoGallery(activityMedia.playlist2026, "EUNICE Playlist"),
  },
  {
    id: 19,
    title: "Palio 2026",
    year: "2026",
    date: "2026",
    category: "Sport",
    location: "UNICT · Italy",
    region: "Catania, Sicily",
    coordinator: "UNICT (Italy)",
    summary: "A multi-day sports and cultural festival strengthening friendships across campuses.",
    description:
      "The 2026 Palio brings alliance students into Catania's university traditions through sport, community events, and intercultural celebration.",
    competencies: ["Intercultural & Global", "Teamwork"],
    image: activityMedia.palio2026[0],
    gallery: photoGallery(activityMedia.palio2026, "Palio 2026"),
  },
  {
    id: 20,
    title: "Volunteering Camp Green Makers — UMONS-UPHF",
    year: "2026",
    date: "2026",
    category: "Sustainability",
    location: "UMONS & UPHF · Belgium & France",
    region: "Mons and Valenciennes",
    coordinator: "UMONS & UPHF",
    summary: "18 students built sustainable prototypes for local communities in a hands-on camp.",
    description:
      "Multidisciplinary teams moved from local research to prototyping, testing practical ideas that connect sustainability, creativity, and community needs.",
    competencies: ["Entrepreneurship", "Teamwork"],
    image: activityMedia.greenMakers2026[0],
    gallery: photoGallery(activityMedia.greenMakers2026, "Green Makers Camp"),
  },
  {
    id: 21,
    title: "Football Tournament at UMONS 2026",
    year: "2026",
    date: "2026",
    category: "Sport",
    location: "UMONS · Belgium",
    region: "Mons, Belgium",
    coordinator: "UMONS (Belgium)",
    summary: "An inter-university football tournament promoting fair play and student integration.",
    description:
      "Teams met in Mons for an inclusive tournament built around fair play, participation, and stronger relationships between students from different campuses.",
    competencies: ["Teamwork", "Intercultural & Global"],
    image: activityMedia.football2026[1],
    gallery: photoGallery(activityMedia.football2026, "Football Tournament at UMONS"),
  },
];

const categories = [
  "Mobility",
  "Sustainability",
  "Digital Innovation",
  "Sport",
  "Inclusion",
  "Community",
  "Culture",
];

const competencyFilters = [
  "Communication",
  "Intercultural & Global",
  "Digital Competence",
  "Technical",
  "Self-Management",
  "Problem Solving",
  "Teamwork",
  "Entrepreneurship",
  "Strategic Thinking",
  "Sustainability",
];

const icon = (name) => {
  const paths = {
    chevronLeft: '<path d="m15 18-6-6 6-6"></path>',
    chevronRight: '<path d="m9 18 6-6-6-6"></path>',
    close: '<path d="m6 6 12 12M18 6 6 18"></path>',
    play: '<path d="m9 7 8 5-8 5V7Z"></path>',
  };

  return `<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">${paths[name]}</svg>`;
};

const state = {
  query: "",
  selectedCategories: new Set(),
  selectedCompetencies: new Set(),
  selectedActivityId: null,
  mediaIndex: 0,
};

const elements = {
  activityGrid: document.querySelector("#activity-grid"),
  categoryFilters: document.querySelector("#category-filters"),
  clearFilters: document.querySelector("#clear-filters"),
  clearSearch: document.querySelector("#clear-search"),
  competencyFilters: document.querySelector("#competency-filters"),
  emptyState: document.querySelector("#empty-state"),
  filterPanel: document.querySelector("#filter-panel"),
  filterToggle: document.querySelector("#filter-toggle"),
  modalRoot: document.querySelector("#modal-root"),
  search: document.querySelector("#activity-search"),
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getFilteredActivities = () => {
  const normalized = state.query.trim().toLocaleLowerCase("en");

  return activities.filter((activity) => {
    const categoryMatch =
      state.selectedCategories.size === 0 || state.selectedCategories.has(activity.category);
    const competencyMatch =
      state.selectedCompetencies.size === 0 ||
      activity.competencies.some((competency) => state.selectedCompetencies.has(competency));
    const searchMatch =
      !normalized ||
      [
        activity.title,
        activity.location,
        activity.region,
        activity.coordinator,
        activity.category,
        activity.year,
        activity.summary,
        activity.competencies.join(" "),
      ]
        .join(" ")
        .toLocaleLowerCase("en")
        .includes(normalized);

    return categoryMatch && competencyMatch && searchMatch;
  });
};

const renderFilterButtons = (container, values, selectedValues, filterType) => {
  container.innerHTML = values
    .map(
      (value) => `
        <button
          class="${selectedValues.has(value) ? "selected" : ""}"
          type="button"
          data-filter-type="${filterType}"
          data-filter-value="${escapeHtml(value)}"
          aria-pressed="${selectedValues.has(value)}"
        >${escapeHtml(value)}</button>
      `,
    )
    .join("");
};

const renderActivities = () => {
  const filtered = getFilteredActivities();
  elements.activityGrid.hidden = filtered.length === 0;
  elements.emptyState.hidden = filtered.length > 0;
  elements.clearFilters.disabled =
    state.selectedCategories.size === 0 && state.selectedCompetencies.size === 0;

  elements.activityGrid.innerHTML = filtered
    .map(
      (activity) => `
        <article class="activity-card">
          <button
            type="button"
            data-activity-id="${activity.id}"
            aria-label="Open ${escapeHtml(activity.title)}"
          >
            <div class="card-image">
              <img src="${escapeHtml(activity.image)}" alt="" loading="lazy">
              <span class="category-badge">${escapeHtml(activity.category)}</span>
            </div>
            <div class="card-content">
              <h3>${escapeHtml(activity.title)}</h3>
              <p class="card-location">${escapeHtml(activity.location)} · ${activity.year}</p>
              <p class="card-summary">${escapeHtml(activity.summary)}</p>
              <div class="competency-list">
                ${activity.competencies
                  .map((competency) => `<span>${escapeHtml(competency)}</span>`)
                  .join("")}
              </div>
            </div>
          </button>
        </article>
      `,
    )
    .join("");
};

const refreshExplorer = () => {
  renderFilterButtons(
    elements.categoryFilters,
    categories,
    state.selectedCategories,
    "category",
  );
  renderFilterButtons(
    elements.competencyFilters,
    competencyFilters,
    state.selectedCompetencies,
    "competency",
  );
  renderActivities();
};

const clearFilters = () => {
  state.selectedCategories.clear();
  state.selectedCompetencies.clear();
  refreshExplorer();
};

const closeModal = () => {
  state.selectedActivityId = null;
  state.mediaIndex = 0;
  elements.modalRoot.replaceChildren();
  document.body.classList.remove("modal-open");
};

const renderModal = (focusClose = false) => {
  const activity = activities.find((item) => item.id === state.selectedActivityId);
  if (!activity) {
    closeModal();
    return;
  }

  const media = activity.gallery[state.mediaIndex];
  const hasMultipleMedia = activity.gallery.length > 1;
  const mediaMarkup =
    media.type === "flyer"
      ? `
        <div class="event-flyer" role="img" aria-label="${escapeHtml(media.label)}">
          <span>EUNICE · ${activity.year}</span>
          <strong>${escapeHtml(activity.title)}</strong>
          <p>${escapeHtml(activity.location)}</p>
        </div>
      `
      : `
        <img src="${escapeHtml(media.src)}" alt="${escapeHtml(media.label)}">
        <div class="media-shade"></div>
        ${
          media.type === "video"
            ? `<span class="play-overlay">${icon("play")} Play video</span>`
            : ""
        }
      `;

  elements.modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <section
        class="activity-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="modal-actions">
          <button type="button" data-modal-action="previous-activity" aria-label="Previous activity">
            ${icon("chevronLeft")}
          </button>
          <button type="button" data-modal-action="next-activity" aria-label="Next activity">
            ${icon("chevronRight")}
          </button>
          <button type="button" data-modal-action="close" aria-label="Close activity details">
            ${icon("close")}
          </button>
        </div>

        <div class="modal-media">
          ${mediaMarkup}
          ${
            hasMultipleMedia
              ? `
                <button
                  class="media-arrow media-arrow--left"
                  type="button"
                  data-modal-action="previous-media"
                  aria-label="Previous media"
                >${icon("chevronLeft")}</button>
                <button
                  class="media-arrow media-arrow--right"
                  type="button"
                  data-modal-action="next-media"
                  aria-label="Next media"
                >${icon("chevronRight")}</button>
              `
              : ""
          }
          <div class="media-dots" aria-label="Select media">
            ${activity.gallery
              .map(
                (item, index) => `
                  <button
                    class="${state.mediaIndex === index ? "active" : ""}"
                    type="button"
                    data-media-index="${index}"
                    aria-label="View ${escapeHtml(item.label)}"
                    ${state.mediaIndex === index ? 'aria-current="true"' : ""}
                  ></button>
                `,
              )
              .join("")}
          </div>
        </div>

        <div class="modal-content">
          <div class="modal-meta">
            <span class="category-badge">${escapeHtml(activity.category)}</span>
            <span>${escapeHtml(activity.date)}</span>
          </div>
          <h2 id="modal-title">${escapeHtml(activity.title)}</h2>
          <p class="modal-location">${escapeHtml(activity.region)}</p>
          <p class="modal-coordinator">
            Coordinator University · ${escapeHtml(activity.coordinator)}
          </p>
          <p class="modal-description">${escapeHtml(activity.description)}</p>
          <div class="competency-panel">
            <span>EUNICE KEY COMPETENCES</span>
            <div>
              ${activity.competencies
                .map((competency) => `<strong>${escapeHtml(competency)}</strong>`)
                .join("")}
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  document.body.classList.add("modal-open");
  if (focusClose) {
    elements.modalRoot.querySelector('[data-modal-action="close"]').focus();
  }
};

const changeMedia = (direction) => {
  const activity = activities.find((item) => item.id === state.selectedActivityId);
  if (!activity) return;
  state.mediaIndex =
    (state.mediaIndex + direction + activity.gallery.length) % activity.gallery.length;
  renderModal();
};

const navigateActivity = (direction) => {
  const filtered = getFilteredActivities();
  if (filtered.length === 0) return;
  const currentIndex = filtered.findIndex((item) => item.id === state.selectedActivityId);
  state.selectedActivityId =
    filtered[(currentIndex + direction + filtered.length) % filtered.length].id;
  state.mediaIndex = 0;
  renderModal();
};

document.querySelector("#explore-button").addEventListener("click", () => {
  document.querySelector("#activities").scrollIntoView({ behavior: "smooth" });
});

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  elements.clearSearch.hidden = !state.query;
  renderActivities();
});

elements.clearSearch.addEventListener("click", () => {
  state.query = "";
  elements.search.value = "";
  elements.clearSearch.hidden = true;
  elements.search.focus();
  renderActivities();
});

elements.filterToggle.addEventListener("click", () => {
  const isOpen = elements.filterPanel.classList.toggle("open");
  elements.filterToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("#clear-filters").addEventListener("click", clearFilters);

document.querySelector("#reset-explorer").addEventListener("click", () => {
  state.query = "";
  elements.search.value = "";
  elements.clearSearch.hidden = true;
  clearFilters();
});

[elements.categoryFilters, elements.competencyFilters].forEach((container) => {
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter-type]");
    if (!button) return;
    const selectedValues =
      button.dataset.filterType === "category"
        ? state.selectedCategories
        : state.selectedCompetencies;
    const value = button.dataset.filterValue;
    selectedValues.has(value) ? selectedValues.delete(value) : selectedValues.add(value);
    refreshExplorer();
  });
});

elements.activityGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-activity-id]");
  if (!button) return;
  state.selectedActivityId = Number(button.dataset.activityId);
  state.mediaIndex = 0;
  renderModal(true);
});

elements.modalRoot.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-backdrop")) {
    closeModal();
    return;
  }

  const dot = event.target.closest("[data-media-index]");
  if (dot) {
    state.mediaIndex = Number(dot.dataset.mediaIndex);
    renderModal();
    return;
  }

  const action = event.target.closest("[data-modal-action]")?.dataset.modalAction;
  if (action === "close") closeModal();
  if (action === "previous-activity") navigateActivity(-1);
  if (action === "next-activity") navigateActivity(1);
  if (action === "previous-media") changeMedia(-1);
  if (action === "next-media") changeMedia(1);
});

window.addEventListener("keydown", (event) => {
  if (state.selectedActivityId === null) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") changeMedia(-1);
  if (event.key === "ArrowRight") changeMedia(1);
});

refreshExplorer();
