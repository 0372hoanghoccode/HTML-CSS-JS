// Lấy phần tử có id là 'progress' và gán vào biến 'progress'
const progress = document.getElementById('progress')

// Lấy phần tử có id là 'prev' và gán vào biến 'prev'
const prev = document.getElementById('prev')

// Lấy phần tử có id là 'next' và gán vào biến 'next'
const next = document.getElementById('next')

// Lấy tất cả các phần tử có class là 'circle' và gán vào biến 'circles'
const circles = document.querySelectorAll('.circle')

// Khởi tạo biến 'currentActive' với giá trị ban đầu là 1
let currentActive = 1

// Thêm sự kiện 'click' vào nút 'next'
next.addEventListener('click', () => {
    // Tăng giá trị của 'currentActive' lên 1
    currentActive++

    // Nếu 'currentActive' lớn hơn số lượng phần tử trong 'circles' thì gán 'currentActive' bằng số lượng phần tử trong 'circles'
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    // Gọi hàm 'update' để cập nhật giao diện
    update()
})

// Thêm sự kiện 'click' vào nút 'prev'
prev.addEventListener('click', () => {
    // Giảm giá trị của 'currentActive' đi 1
    currentActive--

    // Nếu 'currentActive' nhỏ hơn 1 thì gán 'currentActive' bằng 1
    if(currentActive < 1) {
        currentActive = 1
    }

    // Gọi hàm 'update' để cập nhật giao diện
    update()
})

// Hàm 'update' để cập nhật trạng thái giao diện
function update() {
    // Lặp qua từng phần tử trong 'circles' bằng phương thức forEach
    circles.forEach((circle, idx) => {
        // Nếu chỉ số 'idx' của phần tử nhỏ hơn 'currentActive'
        if(idx < currentActive) {
            // Thêm class 'active' vào phần tử 'circle'
            circle.classList.add('active')
        // Ngược lại
        } else {
            // Xóa class 'active' khỏi phần tử 'circle'
            circle.classList.remove('active')
        }
    })

    // Lấy tất cả các phần tử hiện đang có class 'active' và gán vào biến 'actives'
    const actives = document.querySelectorAll('.active')

    // Cập nhật chiều rộng của phần tử 'progress'
    // Tính toán chiều rộng bằng cách lấy số lượng phần tử 'active' trừ đi 1, 
    // chia cho tổng số phần tử 'circles' trừ đi 1, sau đó nhân với 100 để ra phần trăm
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // Nếu giá trị 'currentActive' bằng 1
    if(currentActive === 1) {
        // Disable (vô hiệu hóa) nút 'prev' để không thể nhấn được
        prev.disabled = true
    // Nếu giá trị 'currentActive' bằng tổng số lượng phần tử trong 'circles'
    } else if(currentActive === circles.length) {
        // Disable (vô hiệu hóa) nút 'next' để không thể nhấn được
        next.disabled = true
    // Ngược lại
    } else {
        // Enable (kích hoạt) nút 'prev' để có thể nhấn được
        prev.disabled = false
        // Enable (kích hoạt) nút 'next' để có thể nhấn được
        next.disabled = false
    }
}
