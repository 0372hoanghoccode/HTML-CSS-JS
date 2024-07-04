// Lấy tất cả các phần tử có lớp 'box'
const boxes = document.querySelectorAll('.box')

// Thêm sự kiện 'scroll' vào cửa sổ để kích hoạt hàm 'checkBoxes' khi người dùng cuộn trang
window.addEventListener('scroll', checkBoxes)

// Gọi hàm 'checkBoxes' khi trang được tải
checkBoxes()

// Định nghĩa hàm 'checkBoxes' để kiểm tra vị trí các hộp
function checkBoxes() {
    // Tính toán vị trí kích hoạt dựa trên chiều cao của cửa sổ
    const triggerBottom = window.innerHeight / 5 * 4

    // Lặp qua từng phần tử 'box'
    boxes.forEach(box => {
        // Lấy vị trí phía trên của mỗi hộp so với viewport
        const boxTop = box.getBoundingClientRect().top

        // Nếu vị trí phía trên của hộp nhỏ hơn vị trí kích hoạt, thêm lớp 'show'
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            // Nếu không, gỡ bỏ lớp 'show'
            box.classList.remove('show')
        }
    })
}
