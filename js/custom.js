// 自定义 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // 为图片添加点击效果
  const images = document.querySelectorAll('.post-content img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      this.classList.toggle('zoom-image');
    });
  });
  
  // 动态标题
  let originTitle = document.title;
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.title = '😭 你快回来！ | ' + originTitle;
    } else {
      document.title = '👋 欢迎回来！ | ' + originTitle;
      setTimeout(() => {
        document.title = originTitle;
      }, 2000);
    }
  });
});
