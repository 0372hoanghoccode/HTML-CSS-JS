const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

/* 
- Tạo các biến 'left', 'right' và 'container' để lưu trữ các phần tử DOM được chọn.
- '.left' chọn phần tử với class 'left'.
- '.right' chọn phần tử với class 'right'.
- '.container' chọn phần tử với class 'container'.
*/

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
/* 
- Thêm một sự kiện lắng nghe 'mouseenter' vào phần tử 'left'.
- Khi con trỏ chuột di chuyển vào phần tử 'left', thêm class 'hover-left' vào phần tử 'container'.
*/

left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
/* 
- Thêm một sự kiện lắng nghe 'mouseleave' vào phần tử 'left'.
- Khi con trỏ chuột rời khỏi phần tử 'left', gỡ bỏ class 'hover-left' khỏi phần tử 'container'.
*/

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
/* 
- Thêm một sự kiện lắng nghe 'mouseenter' vào phần tử 'right'.
- Khi con trỏ chuột di chuyển vào phần tử 'right', thêm class 'hover-right' vào phần tử 'container'.
*/

right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
/* 
- Thêm một sự kiện lắng nghe 'mouseleave' vào phần tử 'right'.
- Khi con trỏ chuột rời khỏi phần tử 'right', gỡ bỏ class 'hover-right' khỏi phần tử 'container'.
*/
//hi