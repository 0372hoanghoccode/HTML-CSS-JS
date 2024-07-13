// Mảng các mã màu sắc HEX
const colorCodes = ["#94A684", "#96B6C5", "#9E9FA5", "#96B6C5", "#7EAA92", "#85A389", "#537188", "#CBB279", "#D7C0AE", "#967E76", "#5C8984", "#85586F", "#D0B8A8", "#A7727D", "#B97A95", "#698474"];

// Lấy các phần tử từ DOM
const quoteContainer = document.getElementById("quoteContainer"); // Container chứa trích dẫn
const quote = document.getElementById("quote"); // Phần hiển thị trích dẫn
const author = document.getElementById("author"); // Phần hiển thị tác giả
const body = document.querySelector("body"); // Phần thẻ body của trang web
const btn = document.getElementById("btn"); // Nút tạo trích dẫn

// Thêm sự kiện cho nút để gọi hàm generateQuote khi nhấn
btn?.addEventListener("click", generateQuote);

// Hàm generateQuote để lấy trích dẫn từ API và cập nhật giao diện
async function generateQuote() {
    // Cấu hình cho yêu cầu fetch
    const config = {
        headers: {
            Accept: 'application/json', // Chấp nhận dữ liệu dạng JSON
        },
    }

    // Gửi yêu cầu lấy trích dẫn từ API
    const res = await fetch('https://dummyjson.com/quotes/random', config); // Gửi yêu cầu GET đến API
    const data = await res.json(); // Chuyển đổi dữ liệu nhận được thành JSON
    
    // Ẩn quoteContainer khi đang chờ cập nhật trích dẫn mới
    quoteContainer.style.opacity = "0";

    // Sau 1 giây, cập nhật trích dẫn và tác giả mới, thay đổi màu nền và hiển thị lại quoteContainer
    setTimeout(() => {
        quote.innerHTML = data.quote; // Cập nhật trích dẫn vào phần tử HTML
        author.innerHTML = data.author; // Cập nhật tên tác giả vào phần tử HTML
        body.style.backgroundColor = colorCodes[(Math.floor(Math.random() * colorCodes.length))]; // Chọn màu ngẫu nhiên từ mảng colorCodes cho màu nền body
        quoteContainer.style.opacity = "1"; // Hiển thị lại quoteContainer
    }, 1000);

    // Vô hiệu hóa nút để ngăn người dùng nhấn liên tiếp trong 2 giây
    btn.disabled = true;
    setTimeout(function() {
        btn.disabled = false; // Sau 2 giây, cho phép nhấn nút lại
    }, 2000);
}
