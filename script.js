window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const overlay = document.getElementById('overlay');

  function startExperience() {
    // 1. Ẩn lớp phủ
    overlay.style.display = 'none';

    // 2. Phát nhạc
    music.play().catch(err => {
      console.warn("Không thể phát nhạc tự động:", err);
    });

    // Gỡ sự kiện sau khi chạy
    window.removeEventListener('click', startExperience);
    window.removeEventListener('touchstart', startExperience);
  }

  // Lắng nghe nhấn chuột hoặc chạm lần đầu
  window.addEventListener('click', startExperience);
  window.addEventListener('touchstart', startExperience);
});
