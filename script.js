window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');

  // ✅ Chỉ phát nhạc sau lần tương tác đầu tiên
  function enableMusicPlayback() {
    music.play().then(() => {
      console.log("🎵 Nhạc đã phát thành công");
    }).catch((error) => {
      console.warn("⚠️ Trình duyệt chặn phát nhạc tự động:", error);
    });

    // Chỉ cần phát 1 lần → remove listener sau khi click
    window.removeEventListener('click', enableMusicPlayback);
    window.removeEventListener('touchstart', enableMusicPlayback);
  }

  // Lắng nghe tương tác đầu tiên
  window.addEventListener('click', enableMusicPlayback);
  window.addEventListener('touchstart', enableMusicPlayback); // cho điện thoại
});
