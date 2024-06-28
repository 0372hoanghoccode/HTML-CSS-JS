// Lấy tất cả các phần tử có class là 'panel' và lưu vào mảng panels
const panels = document.querySelectorAll('.panel');

// Duyệt qua từng phần tử panel và thêm sự kiện 'click'
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Khi click vào một panel, gọi hàm removeActiveClasses để xóa class 'active' khỏi tất cả các panel
        removeActiveClasses();
        // Sau đó, thêm class 'active' vào panel được click
        panel.classList.add('active');
    });
});

// Hàm để xóa class 'active' khỏi tất cả các panel
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

