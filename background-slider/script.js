const body = document.body // Lấy phần tử <body> của trang
const slides = document.querySelectorAll('.slide') // Lấy tất cả các phần tử có lớp 'slide'
const dots = document.querySelectorAll('.dots li') // Lấy tất cả các phần tử <li> trong phần tử có lớp 'dots'
const leftBtn = document.getElementById('left') // Lấy phần tử có id 'left' (nút di chuyển sang trái)
const rightBtn = document.getElementById('right') // Lấy phần tử có id 'right' (nút di chuyển sang phải)

let activeSlide = 0 // Biến để theo dõi slide hiện tại (mặc định là slide đầu tiên)

rightBtn.addEventListener('click', () => {
  activeSlide++ // Tăng chỉ số của slide hiện tại

  if (activeSlide > slides.length - 1) { // Nếu slide hiện tại lớn hơn số lượng slide - 1
    activeSlide = 0 // Quay lại slide đầu tiên
  }

  setBgToBody() // Cập nhật nền của body
  setActiveSlide() // Cập nhật slide hiện tại
  setActiveDot() // Cập nhật điểm hiện tại
})

leftBtn.addEventListener('click', () => {
  activeSlide-- // Giảm chỉ số của slide hiện tại

  if (activeSlide < 0) { // Nếu slide hiện tại nhỏ hơn 0
    activeSlide = slides.length - 1 // Chuyển đến slide cuối cùng
  }

  setBgToBody() // Cập nhật nền của body
  setActiveSlide() // Cập nhật slide hiện tại
  setActiveDot() // Cập nhật điểm hiện tại
})

setBgToBody() // Cập nhật nền của body khi trang được tải

// Hàm cập nhật nền của body theo hình nền của slide hiện tại
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// Hàm cập nhật lớp 'active' cho slide hiện tại
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active')) // Xóa lớp 'active' khỏi tất cả các slide

  slides[activeSlide].classList.add('active') // Thêm lớp 'active' cho slide hiện tại
}

// Hàm cập nhật lớp 'active' cho điểm hiện tại
function setActiveDot() {
  dots.forEach((dot) => dot.classList.remove('active')) // Xóa lớp 'active' khỏi tất cả các điểm

  dots[activeSlide].classList.add('active') // Thêm lớp 'active' cho điểm hiện tại
}

// Thêm sự kiện click cho từng điểm để chuyển đến slide tương ứng
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    activeSlide = index // Cập nhật slide hiện tại theo chỉ số của điểm
    setActiveSlide() // Cập nhật slide hiện tại
    setActiveDot() // Cập nhật điểm hiện tại
  })
})
