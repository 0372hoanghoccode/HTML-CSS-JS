// Lấy tất cả các phần tử có lớp 'counter'
const counters = document.querySelectorAll('.counter')

// Duyệt qua từng phần tử 'counter'
counters.forEach(counter => {
    // Đặt giá trị ban đầu của phần tử 'counter' là '0'
    counter.innerText = '0'

    // Hàm cập nhật giá trị của 'counter'
    const updateCounter = () => {
        // Lấy giá trị mục tiêu từ thuộc tính 'data-target'
        const target = +counter.getAttribute('data-target')
        // Lấy giá trị hiện tại của 'counter' và chuyển thành số
        const c = +counter.innerText

        // Tính toán giá trị tăng lên
        const increment = target / 200

        // Nếu giá trị hiện tại nhỏ hơn giá trị mục tiêu
        if(c < target) {
            // Cập nhật giá trị của 'counter' bằng cách làm tròn lên giá trị tăng lên
            counter.innerText = `${Math.ceil(c + increment)}`
            // Gọi hàm updateCounter sau 1 mili giây
            setTimeout(updateCounter, 1)
        } else {
            // Nếu giá trị hiện tại đã đạt hoặc vượt mục tiêu, đặt giá trị của 'counter' bằng giá trị mục tiêu
            counter.innerText = target
        }
    }

    // Bắt đầu cập nhật giá trị của 'counter'
    updateCounter()
})
