// Show/Hide galleries
function showGallery(sectionId) {
  document.getElementById('my-works').classList.add('hidden');
  document.getElementById('nail-retention').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}

// Image modal viewer
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });
});

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}
