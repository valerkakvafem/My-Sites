const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".gallery-item");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    items.forEach(item => {
      item.style.display = filter === "all" || item.dataset.type === filter ? "" : "none";
    });
  });
});

function openLightbox(item){
  const box = document.getElementById("lightbox");
  const photo = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const fake = item.querySelector(".fake-photo");
  photo.className = "lightbox-photo " + [...fake.classList].filter(c => c.startsWith("photo")).join(" ");
  photo.textContent = fake.textContent;
  title.textContent = item.dataset.title;
  box.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox(event){
  if(event && event.target.closest(".lightbox-content")) return;
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeLightbox();
});
