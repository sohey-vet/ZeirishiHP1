document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.service-item-accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.service-header');
        header.addEventListener('click', () => {
            // 他のアコーディオンを閉じる場合はこの行を有効化
            // accordions.forEach(item => item !== accordion && item.classList.remove('active'));
            
            accordion.classList.toggle('active');
        });
    });
});
