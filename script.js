const translations = {
  uk: {
    "nav.home": "Головна",
    "nav.about": "Про мене",
    "nav.gallery": "Галерея",
    "nav.avatars": "Аватари",
    "nav.projects": "Проекти",
    "nav.music": "Музика",
    "nav.contacts": "Контакти",
    "hero.eyebrow": "femboy • VRChat • Unity • electronics",
    "hero.lead": "Привіт! Я Валерій, 17-річний студент, який любить VRChat, аватарки, комп'ютери та електроніку :3",
    "hero.muted": "Тут можна дізнатися більше про мене, подивитися мої VRChat-фото, проєкти та кастомні аватари.",
    "hero.telegram": "Telegram",
    "about.title": "Про мене",
    "about.text": "Я Валерій, мені 17 років. Я фембой, люблю VRChat, технології, електроніку, програмування та все, що пов'язано з комп'ютерами.",
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
    "avatars.title": "Мої аватари",
    "avatars.subtitle": "Аватари, над якими я працював або які кастомізував.",
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
    "contacts.discord": "додати мене",
    "contacts.github": "проєкти та код",
    "contacts.telegram": "написати мені",
    "footer.text": "Зроблено з любов'ю • HTML • CSS • JS",
    "filter.all": "Усі",
    "filter.world": "Світ",
    "filter.friends": "Друзі",
    "filter.photo": "Фотосети"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.gallery": "Gallery",
    "nav.avatars": "Avatars",
    "nav.projects": "Projects",
    "nav.music": "Music",
    "nav.contacts": "Contacts",
    "hero.eyebrow": "femboy • VRChat • Unity • electronics",
    "hero.lead": "Hi! I'm Valerii, a 17-year-old student who loves VRChat, avatars, computers, and electronics :3",
    "hero.muted": "Here you can learn more about me, view my VRChat photos, projects, and custom avatars.",
    "hero.telegram": "Telegram",
    "about.title": "About me",
    "about.text": "I'm Valerii, I'm 17 years old. I'm a femboy, I love VRChat, technology, electronics, programming, and everything related to computers.",
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
    "avatars.title": "My avatars",
    "avatars.subtitle": "Avatars I worked on or customized.",
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
    "contacts.discord": "add me",
    "contacts.github": "projects and code",
    "contacts.telegram": "message me",
    "footer.text": "Made with love • HTML • CSS • JS",
    "filter.all": "All",
    "filter.world": "World",
    "filter.friends": "Friends",
    "filter.photo": "Photosets"
  }
};

const galleryGrid = document.getElementById("galleryGrid");
const uploadInput = document.getElementById("galleryUpload");
const langButtons = document.querySelectorAll(".lang-btn");

const galleryEntries = [
  { src: "assets/gallery/photo1.png", title: "Мій аватар", type: "photo" },
  { src: "assets/gallery/photo2.png", title: "З друзями", type: "friends" },
  { src: "assets/gallery/photo3.png", title: "Нічний світ", type: "world" },
  { src: "assets/gallery/photo4.png", title: "Колаж", type: "photo" },
  { src: "assets/gallery/photo5.png", title: "Фіолетовий світ", type: "world" },
  { src: "assets/gallery/photo6.png", title: "Разом", type: "friends" }
];

function renderGallery(items = galleryEntries) {
  galleryGrid.innerHTML = "";

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";
    button.dataset.type = item.type;
    button.dataset.title = item.title;
    button.dataset.index = String(index);
    button.onclick = () => openLightbox(button);

    const photo = document.createElement("div");
    photo.className = "fake-photo";
    photo.dataset.src = item.src;
    photo.style.backgroundImage = `url('${item.src}')`;
    photo.innerHTML = "<span>VRChat<br>♡</span>";

    button.appendChild(photo);
    galleryGrid.appendChild(button);
  });
}

function getVisibleGalleryItems() {
  return [...document.querySelectorAll(".gallery-item")];
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
}

langButtons.forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

uploadInput.addEventListener("change", (event) => {
  const files = [...event.target.files || []].filter(file => file.type.startsWith("image/"));

  files.forEach((file) => {
    const src = URL.createObjectURL(file);
    galleryEntries.push({
      src,
      title: file.name.replace(/\.[^.]+$/, ""),
      type: "photo"
    });
  });

  renderGallery();
  uploadInput.value = "";
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
