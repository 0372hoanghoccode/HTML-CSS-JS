// Lấy tất cả các nút có class 'ripple'
const buttons = document.querySelectorAll('.ripple')

// Duyệt qua từng nút và thêm sự kiện 'click' cho chúng
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Lấy tọa độ của con trỏ chuột khi nhấn
        const x = e.pageX
        const y = e.pageY

        // Lấy vị trí của nút so với trang
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // Tính toán vị trí bên trong nút nơi đã nhấn
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // Tạo phần tử 'span' mới để làm hiệu ứng sóng
        const circle = document.createElement('span')
        circle.classList.add('circle') // Thêm class 'circle' cho phần tử 'span'
        circle.style.top = yInside + 'px' // Đặt vị trí theo trục Y
        circle.style.left = xInside + 'px' // Đặt vị trí theo trục X

        // Thêm phần tử 'span' vào nút đã nhấn
        this.appendChild(circle)

        // Xóa phần tử 'span' sau 500ms để tạo hiệu ứng biến mất
        setTimeout(() => circle.remove(), 500)
    })
})
