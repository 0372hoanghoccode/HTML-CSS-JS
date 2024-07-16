const toggles = document.querySelectorAll('.faq-toggle')

// Lặp qua tất cả các phần tử có lớp 'toggle'
toggles.forEach(toggle => {
    // Thêm sự kiện 'click' cho mỗi phần tử 'toggle'
    toggle.addEventListener('click', () => {
        // Khi click vào, thay đổi lớp 'active' của phần tử cha
        toggle.parentNode.classList.toggle('active');
    });
});
