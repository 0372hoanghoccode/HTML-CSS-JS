const search = document.querySelector('.search'); // Lấy phần tử có class 'search' từ HTML
const btn = document.querySelector('.btn'); // Lấy phần tử có class 'btn' từ HTML
const input = document.querySelector('.input'); // Lấy phần tử có class 'input' từ HTML

btn.addEventListener('click', () => {
    search.classList.toggle('active'); // chuyển đổi linh hoạt khi click ở trang thái button và cả input
    input.focus(); // Đưa focus vào phần tử input sau khi click vào button
});
