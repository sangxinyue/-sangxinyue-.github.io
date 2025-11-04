// 雪花特效：动态生成与循环
document.addEventListener('DOMContentLoaded', function() {
  const snowNum = 50; // 雪花总数（可调整）
  const container = document.body; // 雪花的父容器

  // 批量创建雪花
  for (let i = 0; i < snowNum; i++) {
    createSnowflake();
  }

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄'; // 雪花符号（也可用其他字符，如"*"）

    // 随机化样式：位置、透明度、大小、动画时长、延迟
    snowflake.style.left = Math.random() * 100 + 'vw'; // 水平随机位置
    snowflake.style.opacity = Math.random() * 0.5 + 0.5; // 透明度随机（0.5~1）
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 大小随机（10~20px）
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'; // 下落时长随机（3~8s）
    snowflake.style.animationDelay = Math.random() * 2 + 's'; // 延迟随机（0~2s）

    container.appendChild(snowflake);

    // 动画结束后移除雪花，重新创建（形成循环）
    setTimeout(() => {
      snowflake.remove();
      createSnowflake();
    }, 8000); // 与动画时长匹配，确保循环流畅
  }
});