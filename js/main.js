// 导航栏激活状态 - 直接使用匿名函数避免变量声明冲突
(function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();
    
    // 设置导航链接的激活状态
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();

// 轮播图功能
function initSlider() {
    const sliderImages = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    // 显示指定幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        sliderImages.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // 显示当前幻灯片
        sliderImages[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    // 下一张幻灯片
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= sliderImages.length) next = 0;
        showSlide(next);
    }

    // 设置自动轮播
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
    }

    // 点击指示器切换幻灯片
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideshow();
        });
    });

    // 开始轮播
    startSlideshow();
}

// 初始化汉堡菜单功能
function initHamburgerMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // 切换图标（菜单/关闭）
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // 点击导航链接后关闭菜单
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

// 页面加载完成后初始化各种功能
window.addEventListener('DOMContentLoaded', () => {
    // 初始化轮播图
    if (document.querySelector('.hero-slider')) {
        initSlider();
    }
    
    // 初始化汉堡菜单
    initHamburgerMenu();
});

console.log('main.js已加载并执行');
