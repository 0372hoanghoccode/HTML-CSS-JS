// Lấy tất cả các phần tử có lớp 'cup-small'
const smallCups = document.querySelectorAll('.cup-small')
// Lấy phần tử có id là 'liters'
const liters = document.getElementById('liters')
// Lấy phần tử có id là 'percentage'
const percentage = document.getElementById('percentage')
// Lấy phần tử có id là 'remained'
const remained = document.getElementById('remained')

// Cập nhật trạng thái của cốc lớn ban đầu
updateBigCup()

// Duyệt qua từng phần tử 'cup-small'
smallCups.forEach((cup, idx) => {
    // Thêm sự kiện 'click' cho từng cốc nhỏ
    cup.addEventListener('click', () => highlightCups(idx))
})

// Hàm tô màu các cốc nhỏ
function highlightCups(idx) {
    // Kiểm tra nếu là cốc cuối cùng và đã đầy thì giảm chỉ số
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    // Kiểm tra nếu cốc hiện tại đã đầy và cốc tiếp theo chưa đầy thì giảm chỉ số
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    // Duyệt qua từng cốc nhỏ và tô màu theo chỉ số
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    // Cập nhật trạng thái của cốc lớn
    updateBigCup()
}

// Hàm cập nhật trạng thái của cốc lớn
function updateBigCup() {
    // Đếm số lượng cốc nhỏ đã đầy
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // Tổng số lượng cốc nhỏ
    const totalCups = smallCups.length

    // Kiểm tra nếu không có cốc nào đầy
    if(fullCups === 0) {
        // Ẩn phần trăm và đặt chiều cao là 0
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // Hiển thị phần trăm và cập nhật chiều cao
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // Kiểm tra nếu tất cả các cốc đều đầy
    if(fullCups === totalCups) {
        // Ẩn phần còn lại và đặt chiều cao là 0
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        // Hiển thị phần còn lại và cập nhật số lít nước còn lại
        remained.style.visibility = 'visible'
        liters.innerText = `${(2 - (200 * fullCups / 1000)).toFixed(2)}L`
    }
}
