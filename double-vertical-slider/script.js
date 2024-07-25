// Chọn các phần tử cần thiết từ DOM
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length; // Đếm số lượng slide

let activeSlideIndex = 0; // Chỉ số slide hiện tại

// Đặt vị trí ban đầu cho slide bên trái để hiển thị slide cuối cùng ở phía trên cùng
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Thêm sự kiện cho các nút bấm lên và xuống
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Hàm thay đổi slide
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight; // Lấy chiều cao của slider container

    if (direction === 'up') {
        activeSlideIndex++; // Tăng chỉ số slide hiện tại khi di chuyển lên
        if (activeSlideIndex > slidesLength - 1) { // Nếu vượt quá số lượng slide, quay lại slide đầu tiên
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--; // Giảm chỉ số slide hiện tại khi di chuyển xuống
        if (activeSlideIndex < 0) { // Nếu dưới 0, chuyển sang slide cuối cùng
            activeSlideIndex = slidesLength - 1;
        }
    }

    // Cập nhật vị trí của slide bên phải và bên trái dựa trên chỉ số slide hiện tại
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
