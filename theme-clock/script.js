// Lấy các phần tử DOM cần thiết
const hourEl = document.querySelector('.hour') // Phần tử đại diện cho kim giờ
const minuteEl = document.querySelector('.minute') // Phần tử đại diện cho kim phút
const secondEl = document.querySelector('.second') // Phần tử đại diện cho kim giây
const timeEl = document.querySelector('.time') // Phần tử hiển thị thời gian hiện tại
const dateEl = document.querySelector('.date') // Phần tử hiển thị ngày tháng hiện tại
const toggle = document.querySelector('.toggle') // Phần tử nút chuyển chế độ sáng/tối

// Mảng chứa tên các ngày trong tuần
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Mảng chứa tên các tháng trong năm
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Thêm sự kiện click cho nút chuyển chế độ sáng/tối
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html') // Lấy phần tử html
    if (html.classList.contains('dark')) { // Nếu chế độ hiện tại là tối
        html.classList.remove('dark') // Xóa lớp 'dark' để chuyển về chế độ sáng
        e.target.innerHTML = '<i class="fa fa-moon"></i>' // Thay đổi biểu tượng thành mặt trăng
    } else {
        html.classList.add('dark') // Thêm lớp 'dark' để chuyển về chế độ tối
        e.target.innerHTML = '<i class="fa fa-sun"></i>' // Thay đổi biểu tượng thành mặt trời
    }
})

// Hàm để thiết lập và cập nhật thời gian
function setTime() {
    const time = new Date(); // Lấy thời gian hiện tại
    const month = time.getMonth() // Lấy tháng hiện tại (0-11)
    const day = time.getDay() // Lấy ngày trong tuần (0-6)
    const date = time.getDate() // Lấy ngày trong tháng (1-31)
    const hours = time.getHours() // Lấy giờ hiện tại (0-23)
    const hoursForClock = hours >= 13 ? hours % 12 : hours; // Chuyển đổi giờ 24h sang giờ 12h
    const minutes = time.getMinutes() // Lấy phút hiện tại (0-59)
    const seconds = time.getSeconds() // Lấy giây hiện tại (0-59)
    const ampm = hours >= 12 ? 'PM' : 'AM' // Xác định AM/PM

    // Cập nhật góc xoay của kim giờ, phút và giây
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    // Cập nhật nội dung hiển thị thời gian và ngày tháng
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// Hàm để ánh xạ giá trị từ một khoảng này sang một khoảng khác
// Nguồn StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Gọi hàm setTime để thiết lập thời gian ngay khi trang được tải
setTime()

// Cập nhật thời gian mỗi giây
setInterval(setTime, 1000)
