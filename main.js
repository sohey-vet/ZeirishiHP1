document.addEventListener('DOMContentLoaded', function () {
    // アコーディオン機能
    const accordions = document.querySelectorAll('.service-item-accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.service-header');
        header.addEventListener('click', () => {
            // 他のアコーディオンを閉じる場合はこの行を有効化
            // accordions.forEach(item => item !== accordion && item.classList.remove('active'));
            
            accordion.classList.toggle('active');
        });
    });

    // ハンバーガーメニュー機能
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (mobileMenuToggle && navMenu) {
        // メニューボタンクリックで開閉
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // メニューリンククリックで閉じる
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // 外側クリックで閉じる
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});
