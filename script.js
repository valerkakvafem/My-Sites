const translations = {
  uk: {
    "nav.home": "Головна",
    "nav.about": "Про мене",
    "nav.gallery": "Галерея",
    "nav.avatars": "Аватари",
    "nav.projects": "Проекти",
    "nav.music": "Музика",
    "nav.contacts": "Контакти",
    "hero.eyebrow": "VRChat • Unity • electronics",
    "hero.lead": "Привіт! Я ValerkaKVA, 17-річний студент, який любить VRChat, аватарки, комп'ютери та електроніку :3",
    "hero.muted": "Тут можна дізнатися більше про мене, подивитися мої VRChat-фото, проєкти та кастомні аватари.",
    "hero.telegram": "Мій Telegram канал",
    "hero.vrchat": "◈ VRChat",
    "hero.github": "GitHub ↗",
    "side.note": "нюня~<br>♡",
    "about.title": "Про мене",
    "about.text": "Я ValerkaKVA, мені 17 років. Люблю VRChat, технології, електроніку, програмування та все, що пов'язано з комп'ютерами.",
    "about.fact1": "◈ VRChat — кілька років",
    "about.fact2": "◇ Unity / Blender — створення та кастомізація аватарів",
    "about.fact3": "⚡ Електроніка / пайка",
    "about.fact4": "⌘ Програмування — C#, Python, HTML/CSS",
    "about.fact5": "♫ Музика — від лоу-фаю до фонку",
    "profile.ageLabel": "Вік",
    "profile.cityLabel": "Місто",
    "profile.cityValue": "Україна",
    "profile.studyLabel": "Навчання",
    "profile.studyValue": "Коледж",
    "profile.statusLabel": "Статус",
    "profile.quote": "«Краще бути собою,<br>ніж ідеальним для інших.»",
    "gallery.title": "Галерея VRChat",
    "gallery.subtitle": "Мої скріншоти з різних світів, фотосетів та просто красиві моменти ♡",
    "gallery.expand": "Показати всі фото",
    "gallery.collapse": "Сховати всі фото",
    "about.note": "смішна киця<br>вчиться як<br>працюють<br>комп'ютери :3",
    "avatars.title": "Мій аватар",
    "avatars.subtitle": "Аватар, над яким я працюю і покращую його.",
    "avatars.name": "Manuka<br>♡",
    "avatars.customAvatar": "Custom Avatar",
    "avatars.galleryLink": "Переглянути галерею →",
    "projects.title": "Проекти",
    "projects.subtitle": "Мої розробки та цікаві ідеї.",
    "projects.item1": "Кастомізація та створення аватарів",
    "projects.item2": "Система повного трекінгу тіла",
    "projects.item3": "Плоттер з DVD-приводів",
    "projects.item4": "Моделі та прототипи",
    "projects.item5": "Мої репозиторії та код",
    "music.title": "Моя музика",
    "contacts.title": "Соцмережі",
    "contacts.vrchat": "мій профіль",
    "contacts.github": "проєкти та код",
    "contacts.telegram": "мій телеграм канал",
    "footer.text": "Зроблено з любов'ю • HTML • CSS • JS"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.gallery": "Gallery",
    "nav.avatars": "Avatars",
    "nav.projects": "Projects",
    "nav.music": "Music",
    "nav.contacts": "Contacts",
    "hero.eyebrow": "VRChat • Unity • electronics",
    "hero.lead": "Hi! I'm ValerkaKVA, a 17-year-old student who loves VRChat, avatars, computers, and electronics :3",
    "hero.muted": "Here you can learn more about me, view my VRChat photos, projects, and custom avatars.",
    "hero.telegram": "My Telegram channel",
    "hero.vrchat": "◈ VRChat",
    "hero.github": "GitHub ↗",
    "side.note": "nya~<br>♡",
    "about.title": "About me",
    "about.text": "I'm ValerkaKVA, I'm 17 years old. I love VRChat, technology, electronics, programming, and everything related to computers.",
    "about.fact1": "◈ VRChat — several years",
    "about.fact2": "◇ Unity / Blender — creating and customizing avatars",
    "about.fact3": "⚡ Electronics / soldering",
    "about.fact4": "⌘ Programming — C#, Python, HTML/CSS",
    "about.fact5": "♫ Music — from lo-fi to ambient",
    "profile.ageLabel": "Age",
    "profile.cityLabel": "City",
    "profile.cityValue": "Ukraine",
    "profile.studyLabel": "Education",
    "profile.studyValue": "College",
    "profile.statusLabel": "Status",
    "profile.quote": "«Better to be yourself,<br>than perfect for others.»",
    "gallery.title": "VRChat Gallery",
    "gallery.subtitle": "My screenshots from different worlds, photosets, and just beautiful moments ♡",
    "gallery.expand": "Show all photos",
    "gallery.collapse": "Hide all photos",
    "about.note": "silly cat<br>learning how<br>computers<br>work :3",
    "avatars.title": "My avatar",
    "avatars.subtitle": "The avatar I’m working on and improving.",
    "avatars.name": "Manuka<br>♡",
    "avatars.customAvatar": "Custom Avatar",
    "avatars.galleryLink": "View gallery →",
    "projects.title": "Projects",
    "projects.subtitle": "My projects and interesting ideas.",
    "projects.item1": "Customization and creation of avatars",
    "projects.item2": "Full-body tracking system",
    "projects.item3": "DVD-drive plotter",
    "projects.item4": "Prototype models",
    "projects.item5": "My repositories and code",
    "music.title": "My music",
    "contacts.title": "Socials",
    "contacts.vrchat": "my profile",
    "contacts.github": "projects and code",
    "contacts.telegram": "my telegram channel",
    "footer.text": "Made with love • HTML • CSS • JS"
  }
};

const galleryGrid = document.getElementById("galleryGrid");
const galleryMarquee = document.getElementById("galleryMarquee");
const galleryExpandBtn = document.getElementById("galleryExpandBtn");
const galleryShell = document.getElementById("galleryShell");
const langButtons = document.querySelectorAll(".lang-btn");
const sakuraToggle = document.getElementById("sakuraToggle");

function createSakuraLayer() {
  const layer = document.createElement("div");
  layer.className = "sakura-layer";
  layer.setAttribute("aria-hidden", "true");

  const petalCount = 22;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("span");
    petal.className = "sakura-petal";

    const size = (Math.random() * 12 + 10).toFixed(2);
    const duration = (Math.random() * 10 + 10).toFixed(2);
    const delay = (Math.random() * -12).toFixed(2);
    const drift = (Math.random() * 70 - 35).toFixed(2);
    const driftEnd = (Math.random() * 70 - 35).toFixed(2);

    petal.style.setProperty("--size", `${size}px`);
    petal.style.setProperty("--duration", `${duration}s`);
    petal.style.setProperty("--delay", `${delay}s`);
    petal.style.setProperty("--left", `${(Math.random() * 100).toFixed(2)}%`);
    petal.style.setProperty("--drift", `${drift}px`);
    petal.style.setProperty("--drift-end", `${driftEnd}px`);

    layer.appendChild(petal);
  }

  document.body.appendChild(layer);
  return layer;
}

let sakuraEnabled = true;

function setSakuraState(enabled) {
  sakuraEnabled = enabled;
  document.body.classList.toggle("sakura-off", !enabled);

  if (sakuraToggle) {
    sakuraToggle.setAttribute("aria-pressed", String(enabled));
  }

  const petals = document.querySelectorAll(".sakura-petal");
  petals.forEach(petal => {
    petal.style.animationPlayState = enabled ? "running" : "paused";
  });
}

if (sakuraToggle) {
  sakuraToggle.addEventListener("click", () => setSakuraState(!sakuraEnabled));
}

createSakuraLayer();
setSakuraState(true);

const defaultGalleryEntries = Array.isArray(window.galleryData) && window.galleryData.length
  ? window.galleryData
  : [
      { src: "assets/gallery/photo1.webp", title: "Мій аватар", type: "photo" },
      { src: "assets/gallery/photo2.webp", title: "З друзями", type: "friends" },
      { src: "assets/gallery/photo3.webp", title: "Нічний світ", type: "world" },
      { src: "assets/gallery/photo5.webp", title: "Фіолетовий світ", type: "world" },
      { src: "assets/gallery/photo6.webp", title: "Разом", type: "friends" }
    ];

let galleryEntries = [...defaultGalleryEntries];

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function buildGalleryCard(item, index, className = "gallery-item") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.dataset.type = item.type;
  button.dataset.title = item.title;
  button.dataset.index = String(index);
  button.onclick = () => openLightbox(button);

  const photo = document.createElement("div");
  photo.className = "fake-photo";
  photo.dataset.src = item.src;
  photo.style.backgroundImage = `url('${item.src}')`;

  button.appendChild(photo);
  return button;
}

function renderGallery(items = galleryEntries) {
  const randomizedItems = shuffleArray(items);

  if (galleryMarquee) {
    galleryMarquee.innerHTML = "";
    const repeatedItems = [...randomizedItems, ...randomizedItems];
    repeatedItems.forEach((item, index) => {
      galleryMarquee.appendChild(buildGalleryCard(item, index, "gallery-item marquee-item"));
    });

    requestAnimationFrame(() => {
      const halfWidth = galleryMarquee.scrollWidth / 2;
      galleryMarquee.style.setProperty("--scroll-distance", `${halfWidth}px`);
    });
  }

  if (galleryGrid) {
    galleryGrid.innerHTML = "";
    randomizedItems.forEach((item, index) => {
      galleryGrid.appendChild(buildGalleryCard(item, index, "gallery-item full-item"));
    });
  }
}

function toggleGalleryExpanded() {
  if (!galleryShell || !galleryExpandBtn) return;

  const expanded = galleryShell.classList.toggle("expanded");
  const lang = document.documentElement.lang || "uk";
  galleryExpandBtn.innerHTML = translations[lang][expanded ? "gallery.collapse" : "gallery.expand"];
}

if (galleryExpandBtn) {
  galleryExpandBtn.addEventListener("click", toggleGalleryExpanded);
}

function getVisibleGalleryItems() {
  if (galleryShell && galleryShell.classList.contains("expanded")) {
    return [...galleryGrid.querySelectorAll(".gallery-item")];
  }

  return [...galleryMarquee.querySelectorAll(".gallery-item")];
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.uk;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.lang = lang;
  langButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  if (galleryExpandBtn) {
    const expanded = galleryShell && galleryShell.classList.contains("expanded");
    galleryExpandBtn.innerHTML = dict[expanded ? "gallery.collapse" : "gallery.expand"];
  }
}

langButtons.forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

function loadImageIntoLightbox(fake) {
  const photoBox = document.getElementById("lightboxImage");
  const src = fake.dataset.src || getComputedStyle(fake).backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1];

  if (src) {
    photoBox.style.backgroundImage = `url(${src})`;
    photoBox.textContent = "";
  } else {
    photoBox.style.backgroundImage = "";
    photoBox.textContent = fake.textContent;
  }
}

function openLightbox(item){
  const box = document.getElementById("lightbox");
  const title = document.getElementById("lightboxTitle");
  const fake = item.querySelector(".fake-photo");
  const galleryItems = getVisibleGalleryItems();

  currentGalleryItem = galleryItems.indexOf(item);
  loadImageIntoLightbox(fake);
  title.textContent = item.dataset.title;
  box.classList.add("open");
  document.body.style.overflow = "hidden";
}

function showNextImage(){
  const items = getVisibleGalleryItems();
  if (!items.length) return;
  currentGalleryItem = (currentGalleryItem + 1) % items.length;
  const item = items[currentGalleryItem];
  const fake = item.querySelector(".fake-photo");
  document.getElementById("lightboxTitle").textContent = item.dataset.title;
  loadImageIntoLightbox(fake);
}

function showPrevImage(){
  const items = getVisibleGalleryItems();
  if (!items.length) return;
  currentGalleryItem = (currentGalleryItem - 1 + items.length) % items.length;
  const item = items[currentGalleryItem];
  const fake = item.querySelector(".fake-photo");
  document.getElementById("lightboxTitle").textContent = item.dataset.title;
  loadImageIntoLightbox(fake);
}

let currentGalleryItem = 0;

function closeLightbox(event){
  if (event && event.target && event.target.closest && event.target.closest(".lightbox-content")) return;
  const box = document.getElementById("lightbox");
  if (box) box.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});

renderGallery();
applyLanguage("uk");
