class SnowEffect {
  constructor(options = {}) {
    this.snowflakes = [];
    this.options = {
      count: options.count || 80,
      speed: options.speed || 1,
      size: options.size || 2,
      color: options.color || '#FFFFFF',
      ...options
    };
    this.init();
  }

  init() {
    this.createStyle();
    this.createSnowflakes();
    this.animate();
  }

  createStyle() {
    const style = document.createElement('style');
    style.textContent = `
      .snowflake {
        position: fixed;
        top: -20px;
        color: ${this.options.color};
        user-select: none;
        pointer-events: none;
        z-index: 9999;
        will-change: transform;
      }
    `;
    document.head.appendChild(style);
  }

  createSnowflakes() {
    for (let i = 0; i < this.options.count; i++) {
      setTimeout(() => this.createSnowflake(), i * 100);
    }
  }

  createSnowflake() {
    const types = ['❄', '❅', '❆', '•'];
    const snowflake = document.createElement('div');
    snowflake.innerHTML = types[Math.floor(Math.random() * types.length)];
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * this.options.size + 1;
    snowflake.style.fontSize = size + 'em';
    snowflake.style.opacity = Math.random() * 0.6 + 0.3;
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    document.body.appendChild(snowflake);
    
    this.snowflakes.push({
      element: snowflake,
      x: Math.random() * window.innerWidth,
      y: -20,
      speed: Math.random() * this.options.speed + 0.5,
      sway: Math.random() * 2 - 1,
      size: size
    });
  }

  animate() {
    const animateFrame = () => {
      this.snowflakes.forEach((snowflake) => {
        if (!snowflake.element.parentNode) return;
        
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.sway * Math.sin(snowflake.y * 0.01);
        
        // 重置超出屏幕的雪花
        if (snowflake.y > window.innerHeight + 20) {
          snowflake.y = -20;
          snowflake.x = Math.random() * window.innerWidth;
        }
        
        // 边界检查
        if (snowflake.x < -50) snowflake.x = window.innerWidth + 50;
        if (snowflake.x > window.innerWidth + 50) snowflake.x = -50;
        
        snowflake.element.style.transform = `translate(${snowflake.x}px, ${snowflake.y}px)`;
      });
      
      requestAnimationFrame(animateFrame);
    };
    
    animateFrame();
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new SnowEffect({
      count: 60,
      speed: 1.5,
      size: 1.5,
      color: '#ffffff'
    });
  });
} else {
  new SnowEffect({
    count: 60,
    speed: 1.5,
    size: 1.5,
    color: '#ffffff'
  });
}