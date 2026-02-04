const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// Show lightbox when thumbnail clicked
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const fullSrc = item.src.replace("-thumbnail", ""); // remove -thumbnail
    lightboxImage.src = fullSrc;
    lightbox.style.display = "flex";
  });
});

// Close lightbox when clicking close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when clicking outside image (on background)
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
