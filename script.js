window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const overlay = document.getElementById('overlay');

  function startExperience() {
    // 1. Ẩn lớp phủ
    overlay.style.display = 'none';

    // 2. Gọi play() sau tương tác
    music.play().then(() => {
      console.log("🎵 Nhạc đã phát");
    }).catch(err => {
      console.warn("⚠️ Trình duyệt chặn phát nhạc:", err);
    });

    // Gỡ sự kiện
    window.removeEventListener('click', startExperience);
    window.removeEventListener('touchstart', startExperience);
  }

  // 👇 Lắng nghe tương tác đầu tiên trên mọi thiết bị
  window.addEventListener('click', startExperience);
  window.addEventListener('touchstart', startExperience);
});
