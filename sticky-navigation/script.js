// Lấy phần tử thanh điều hướng từ DOM bằng cách chọn class 'nav'
const nav = document.querySelector('.nav');

// Thêm một sự kiện lắng nghe cuộn trang
window.addEventListener('scroll', fixNav);

// Hàm để xử lý hiệu ứng sticky cho thanh điều hướng
function fixNav() {
    // Kiểm tra vị trí cuộn của cửa sổ so với chiều cao của thanh điều hướng cộng thêm 150px
    if (window.scrollY > nav.offsetHeight + 150) {
        // Nếu vị trí cuộn lớn hơn chiều cao của thanh điều hướng cộng thêm 150px, thêm lớp 'active'
        nav.classList.add('active');
    } else {
        // Ngược lại, nếu vị trí cuộn nhỏ hơn hoặc bằng, loại bỏ lớp 'active'
        nav.classList.remove('active');
    }
}
